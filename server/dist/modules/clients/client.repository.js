"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const inversify_1 = require("inversify");
const mongo_repository_1 = require("../../repositories/mongo.repository");
const types_1 = require("../../types");
const client_model_1 = require("./client.model");
const config_1 = require("../../config");
const nanoid_1 = require("nanoid");
let ClientRepository = class ClientRepository extends mongo_repository_1.MongoRepository {
    constructor(mongoConnection, requestContext) {
        super(mongoConnection);
        this.requestContext = requestContext;
    }
    getModel() {
        return client_model_1.ClientModel;
    }
    create(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                id: (0, nanoid_1.nanoid)(),
                isActive: true,
                name: args.name,
                paymentPerHour: args.paymentPerHour,
                email: args.email,
                paymentMonthOffset: args.paymentMonthOffset,
                phoneNumber: args.phoneNumber,
                userId: this.requestContext.user.userId
            };
            yield this.model.create(query);
        });
    }
    getClients(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = {};
            filter["userId"] = this.requestContext.user.userId;
            if (args.filterText) {
                filter['name'] = {
                    $regex: args.filterText
                };
            }
            const aggregation = this.model.aggregate().match(filter);
            const result = yield aggregation.exec();
            if (args.includeDebt) {
                const debtHours = yield this.model.aggregate().lookup({
                    from: types_1.CollectionNames.sessions,
                    localField: 'id',
                    foreignField: 'client.id',
                    as: 'sessions',
                    pipeline: [
                        {
                            $match: {
                                "paymentState": "owed"
                            }
                        }
                    ]
                }).project({
                    "_id": 0,
                    "id": 1,
                    debtHours: { "$sum": "$sessions.timeInHours" }
                }).exec();
                result.forEach(client => {
                    const debtObject = debtHours.find(x => x.id === client.id);
                    client.debt = debtObject.debtHours * client.paymentPerHour;
                });
            }
            return result;
        });
    }
};
ClientRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.connection)),
    __param(1, (0, inversify_1.inject)(config_1.InjectionTokens.requestContext))
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map