import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private productService:ProductService,private fb: FormBuilder, private http: HttpClient,
              private router: Router) {
  }

  get form() {
    return this.loginForm.controls;
  }

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error!: string;

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    if(this.productService.login(data.username)!=null)
      this.router.navigate([`/products/`])
  }
  
}