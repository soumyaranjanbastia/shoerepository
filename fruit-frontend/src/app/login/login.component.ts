import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) {}

  home() {
    this.router.navigate(['/home']);
  }

  onLogin(loginForm: any) {
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe((data)=>{
      if(data) {
        alert("valid user")
      }else{
        alert("invalid user")
      }
    })
  }
}
