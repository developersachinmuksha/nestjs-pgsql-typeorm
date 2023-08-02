require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.getPort(), () => console.log("Running... on " + configService.getPort() + " and NODE_ENV = "+configService.getEnv())
  );
}           
bootstrap();
