import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Boolean = true;
  signup: Boolean = false;
  forgotPassword: Boolean = false;
  email: any = '';
  password: any = '';

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this);
  }

  toggle(page) {
    ['login', 'signup', 'forgotPassword'].map(q => this[q] = false);
    this[page] = true;
  }

}
