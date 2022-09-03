"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv-extended/config");
const server_1 = require("./config/server");
const app = (0, server_1.createServer)();
const { PORT } = process.env;
app.listen(PORT, () => {
    console.info(`Server listening on ${PORT}`);
});
//# sourceMappingURL=app.js.map