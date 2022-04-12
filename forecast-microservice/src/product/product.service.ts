import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const { faker } = require('@faker-js/faker');
@Injectable()
export class ProductService {
  constructor(@InjectModel('product') private readonly productModel: Model<Product>){}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id })
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true})
  }

  async remove(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id)
  }
  async forecast(){
    const results = Array.from({length: 12}).map<Number> (
      (_, i) => {
        return faker.random.number({min: 100, max: 500});
      }
  )
  return Promise.all(results);
  }
}
