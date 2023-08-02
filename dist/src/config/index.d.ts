import { DataSourceOptions } from 'typeorm';
declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    getEnv(): string;
    isProduction(): boolean;
    isDevelopment(): boolean;
    isStaging(): boolean;
    isLocal(): boolean;
    getTypeOrmConfig(): DataSourceOptions;
}
declare const configService: ConfigService;
export { configService };
