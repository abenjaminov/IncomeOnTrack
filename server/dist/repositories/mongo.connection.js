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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const inversify_1 = require("inversify");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
let MongoConnection = class MongoConnection {
    constructor(log) {
        this.log = log;
        if (!process.env.MONGO_URI) {
            this.log.error(`Connected to DB`);
            throw new Error('Missing DB URI');
        }
        this.connection = mongoose_1.default.createConnection(process.env.MONGO_URI);
        this.log.info("Connected to DB");
    }
    getConnection() {
        return this.connection;
    }
};
MongoConnection = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(config_1.InjectionTokens.log))
], MongoConnection);
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=mongo.connection.js.map