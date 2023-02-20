import mongoose, {FilterQuery} from "mongoose";
import {inject} from "inversify";
import {InjectionTokens} from "../../../config";
import {IDBService} from "../db/db.interface";
import {IGetObjectsBase, IGetObjectsResult, IObjectBase} from "@income-on-track/shared";
import {IRepositoryBase} from "./repository.interface";

export abstract class RepositoryBase<T extends IObjectBase,F extends IGetObjectsBase> implements IRepositoryBase<T, F> {
    protected model: mongoose.Model<T>;

    @inject(InjectionTokens.dbService) dbService: IDBService;

    protected constructor(model: mongoose.Model<T>) {
        this.model = this.dbService.getRepository(model);
    }

    buildObjectsFilter(args: IGetObjectsBase): FilterQuery<T> {
        const filterBase: FilterQuery<T> = {};

        if(args.ids) {
            filterBase.id = { $in: args.ids}
        }

        return filterBase;
    }

    abstract buildFilterInternal(args: F): FilterQuery<T>;

    async getObjects(args: F): Promise<IGetObjectsResult> {
        const baseFilter = this.buildObjectsFilter(args);
        const internalFilter = this.buildFilterInternal(args);

        const filter = {
            ...baseFilter,
            ...internalFilter
        }

        const page = args.page ?? 0;
        const pageSize = page * (args.pageSize ?? 15);

        const count = await this.model.count(filter);
        const objects = await this.model.find(filter).skip(page).limit(pageSize).lean();

        return {
            count,
            objects
        }
    }
}