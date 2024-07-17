import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('ex@ample.com',[Validators.required,Validators.email]);
  // password2 : FormControl = new FormControl('*******',[Validators.required,Validators.minLength(8)]);

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkRememberMe();
  }

  checkRememberMe() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      this.username = savedUsername;
      this.password = savedPassword;
      this.rememberMe = true;
    }
  }
  onRememberMeChange(event: Event) {
    this.rememberMe = (event.target as HTMLInputElement).checked;
}

  onSubmit() {
    if (this.rememberMe) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

  }
}
