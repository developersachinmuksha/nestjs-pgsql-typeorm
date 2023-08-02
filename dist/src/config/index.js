"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('API_PORT', true);
    }
    getEnv() {
        return this.getValue('NODE_ENV', true);
    }
    isProduction() {
        const mode = this.getValue('NODE_ENV', true);
        return mode === 'production';
    }
    isDevelopment() {
        const mode = this.getValue('NODE_ENV', true);
        return mode === 'development';
    }
    isStaging() {
        const mode = this.getValue('NODE_ENV', true);
        return mode === 'staging';
    }
    isLocal() {
        const mode = this.getValue('NODE_ENV', false);
        return mode && !this.isProduction() && !this.isStaging() && !this.isDevelopment();
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [
                'src/modules/**/*.entity{.ts,.js}',
                'src/modules/**/*.view-entity{.ts,.js}',
            ],
            migrations: ['src/database/migrations/*{.ts,.js}'],
            migrationsTableName: 'migration',
            ssl: this.isProduction(),
        };
    }
}
const configService = new ConfigService(process.env)
    .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
]);
exports.configService = configService;
//# sourceMappingURL=index.js.map