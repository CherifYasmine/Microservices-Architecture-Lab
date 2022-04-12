import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService, private router: Router) { }
  products:any = []
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(products=>{
      this.products=products
    });
  }
  redirectForecast(product:any) {
    console.log(product);
    this.router.navigate([`/forecast/${product.name}`])
  }

}
