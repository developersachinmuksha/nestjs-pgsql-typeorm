"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("dotenv").config();
const config_1 = require("./src/config");
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource(config_1.configService.getTypeOrmConfig());
//# sourceMappingURL=ormconfig.js.map