import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { Response } from 'express';

@Injectable()
export class AppService {
  constructor(@Inject("FORECAST_MICROSERVICE") private readonly forecastMicroservice: ClientProxy,
              @Inject("SECURITY_MICROSERVICE") private readonly securityMicroservice: ClientProxy
  ) {}
  async listProducts(response: Response) {
    return this.forecastMicroservice.send('list_products',{})
            .subscribe((data) => response.status(HttpStatus.OK).send(data))
  }
  async forecast(response: Response) {
    return this.forecastMicroservice.send('forecast',{})
            .subscribe((data) => response.status(HttpStatus.OK).send(data))
  }
  async auth(response: Response) {
    return this.securityMicroservice.send('hello',{})
            .subscribe((data) => response.status(HttpStatus.OK).send(data))
  }
}
