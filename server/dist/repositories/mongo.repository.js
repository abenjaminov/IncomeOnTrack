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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const inversify_1 = require("inversify");
const config_1 = require("../config");
let MongoRepository = class MongoRepository {
    constructor(mongoConnection) {
        this.mongoConnection = mongoConnection;
        const model = this.getModel();
        const connection = this.mongoConnection.getConnection();
        this.modelRepo = connection.models[model.collection.name] || connection.model(model.collection.name, model.schema);
    }
    get model() {
        return this.modelRepo;
    }
};
MongoRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.connection))
], MongoRepository);
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=mongo.repository.js.map