import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private productService:ProductService,private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  get form() {
    return this.loginForm.controls;
  }

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error!: string;

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const data = {
      email: this.loginForm.value.email,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.productService.register(data)
    this.router.navigate([`/login/`])

  }

}
