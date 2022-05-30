import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Model } from 'mongoose';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<Auth>){}
  async create(createAuthDto: CreateAuthDto) {
    const newProduct = new this.userModel(createAuthDto);
    return await newProduct.save();
  }

  findAll() {
    return `This action returns all auth`;
  }

  async login(name: string) {
    return await this.userModel.findOne({ name: name })
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
