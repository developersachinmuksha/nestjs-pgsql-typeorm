require("dotenv").config()
import { configService } from './src/config';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource(configService.getTypeOrmConfig());