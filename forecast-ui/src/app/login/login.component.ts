import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient,
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

  }
  
}