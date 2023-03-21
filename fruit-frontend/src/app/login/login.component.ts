import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  userName: any = 'Bastia';
  password: any = 'jt123';
  getFormData(formData: any) {
    console.log(formData);
    if (
      formData.userName == this.userName &&
      formData.password == this.password
    ) {
      console.log('Login Successfull');
      this.router.navigate(['/home']);
    } else {
      console.log('Login Failed!!');
    }
  }
  home() {
    this.router.navigate(['/home']);
  }
}
