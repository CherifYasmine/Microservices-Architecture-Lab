import { Controller} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('list_products')
  findAll(): Promise<Product[]>  {
    return this.productService.findAll();
  }

  @EventPattern('forecast')
  forecast() {
    return this.productService.forecast();
  }
}
