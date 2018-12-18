import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = true;
  signup = false;
  forgotPassword = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(page) {
    ['login', 'signup', 'forgotPassword'].map(q => this[q] = false);
    this[page] = true;
  }

}
