import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
