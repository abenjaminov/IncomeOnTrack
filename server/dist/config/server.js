"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapServer = exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const inversify_express_utils_1 = require("inversify-express-utils");
const container_1 = require("./container");
const cors_1 = __importDefault(require("cors"));
const createServer = () => {
    const server = new inversify_express_utils_1.InversifyExpressServer(container_1.container);
    server.setConfig(app => (0, exports.bootstrapServer)(app));
    const app = server.build();
    return app;
};
exports.createServer = createServer;
const bootstrapServer = (app) => {
    const corsOptions = {
        origin: [/iot/, 'http://127.0.0.1:1993', 'http://localhost:1993', 'https://income-on-track.vercel.app'],
        methods: ['POST', 'GET', 'PUT', 'DELETE'],
        credentials: true,
        maxAge: 3600,
    };
    app.use((0, cors_1.default)(corsOptions));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, helmet_1.default)());
};
exports.bootstrapServer = bootstrapServer;
//# sourceMappingURL=server.js.map