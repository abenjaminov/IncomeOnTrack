"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.SessionRepository = void 0;
const inversify_1 = require("inversify");
const mongo_repository_1 = require("../../repositories/mongo.repository");
const session_model_1 = require("./session.model");
const date_fns_1 = require("date-fns");
let SessionRepository = class SessionRepository extends mongo_repository_1.MongoRepository {
    getModel() {
        return session_model_1.SessionModel;
    }
    getSessions(args) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {};
            if (args.clientId) {
                filter["client.id"] = args.clientId;
            }
            if (args.month || args.year) {
                const now = new Date();
                const year = (_a = args.year) !== null && _a !== void 0 ? _a : now.getUTCFullYear();
                const month = (_b = args.month) !== null && _b !== void 0 ? _b : now.getUTCMonth();
                const filterDate = (0, date_fns_1.set)(now, {
                    year,
                    month
                });
                filter["startDate"] = {
                    $gte: (0, date_fns_1.startOfMonth)(filterDate),
                    lte: (0, date_fns_1.endOfMonth)(filterDate)
                };
            }
            const result = yield this.model.find(filter);
            return result;
        });
    }
    addSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.create(session);
        });
    }
    updateSession(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findOneAndUpdate({
                id: args.id
            }, {
                $set: args.values
            }, {
                new: true
            }).lean();
            return result;
        });
    }
};
SessionRepository = __decorate([
    (0, inversify_1.injectable)()
], SessionRepository);
exports.SessionRepository = SessionRepository;
//# sourceMappingURL=session.repository.js.map