import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: any;
  private firstName: any;
  private lastName: any;

  constructor(private authServices: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authServices.currentUser?.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]);
    this.lastName = new FormControl(this.authServices.currentUser?.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  validFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any): void {
    if (this.profileForm.valid) {
      this.authServices.updateUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
}
