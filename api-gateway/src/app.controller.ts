import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/forecast/all-products')
  getAllProducts(@Res() response) {
    return this.appService.listProducts(response);
  }
  @Get('/forecast/')
  forecast(@Res() response) {
    return this.appService.forecast(response);
  }
  @Get('/forecast/hello')
  auth(@Res() response) {
    return this.appService.auth(response);
  }
  @Post('/auth/login')
  login(@Body() name: string,@Res() response) {
    return this.appService.login(name, response);
  }
  @Post('/auth/register')
  register(@Body() credentials: any,@Res() response) {
    return this.appService.register(credentials, response);
  }
 
}
