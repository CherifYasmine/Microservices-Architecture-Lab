import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";
import * as dotenv from 'dotenv';

dotenv.config();
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.HOST,
      port: process.env.PORT
    }
  });
  await app.listen();
}
bootstrap();

