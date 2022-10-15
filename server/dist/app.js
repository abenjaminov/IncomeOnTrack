"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv-extended/config");
const server_1 = require("./config/server");
const express_1 = __importDefault(require("express"));
const app = (0, server_1.createServer)();
const { PORT } = process.env;
const parentApp = (0, express_1.default)();
parentApp.use('/api', app);
parentApp.listen(PORT, () => {
    console.info(`Server listening on ${PORT}`);
});
//# sourceMappingURL=app.js.map