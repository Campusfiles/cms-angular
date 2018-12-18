import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error as showErrorToast } from 'toastr';

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

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  validate() {
    if (!this.email) {
      showErrorToast('Please enter email');
    } else if (!this.password) {
      showErrorToast('Please enter password');
    } else {
      return true;
    }
  }

  loginUser() {
    if (this.validate()) {
      this.router.navigate(['admin']);
    }
  }

  toggle(page) {
    ['login', 'signup', 'forgotPassword'].map(q => this[q] = false);
    this[page] = true;
  }

}
