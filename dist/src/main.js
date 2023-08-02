"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(config_1.configService.getPort(), () => console.log("Running... on " + config_1.configService.getPort() + " and NODE_ENV = " + config_1.configService.getEnv()));
}
bootstrap();
//# sourceMappingURL=main.js.map