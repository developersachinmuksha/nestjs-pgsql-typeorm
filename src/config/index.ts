import { DataSourceOptions } from 'typeorm';

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('API_PORT', true);
  }

  public getEnv() {
    return this.getValue('NODE_ENV', true);
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'production';
  }

  public isDevelopment() {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'development';
  }

  public isStaging() {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'staging';
  }

  public isLocal() {
    const mode = this.getValue('NODE_ENV', false);
    return mode && !this.isProduction() && !this.isStaging() && !this.isDevelopment();
  }

  public getTypeOrmConfig(): DataSourceOptions {
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

export { configService };