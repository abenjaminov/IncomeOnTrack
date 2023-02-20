import {IGetObjectsBase, IGetObjectsResult, IObjectBase} from "@income-on-track/shared";

export interface IRepositoryBase<T extends IObjectBase,F extends IGetObjectsBase> {
    getObjects(args: F): Promise<IGetObjectsResult>;
}