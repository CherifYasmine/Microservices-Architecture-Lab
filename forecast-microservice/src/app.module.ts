import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
