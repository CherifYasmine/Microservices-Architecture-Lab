import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @EventPattern('signin') 
  login(@Body() name) {
    return this.authService.login(name);
  }
  @EventPattern('register')
  register(@Body() registerInput) {
    return this.authService.create(registerInput);
  }
}
