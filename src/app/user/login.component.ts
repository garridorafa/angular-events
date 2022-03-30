import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName: any;
  password: any;
  mouseoverLogin: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  login = (formValues: any): any => {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  };

  cancel = (): void => {
    this.router.navigate(['events']);
  };
}
