import { Controller, Get, Res } from '@nestjs/common';
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
 
}
