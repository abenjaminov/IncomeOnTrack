"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const app_1 = require("../modules/app");
(0, inversify_express_utils_1.cleanUpMetadata)();
const container = new inversify_1.Container();
exports.container = container;
container.bind(inversify_express_utils_1.TYPE.Controller).to(app_1.AppController);
//# sourceMappingURL=container.js.map