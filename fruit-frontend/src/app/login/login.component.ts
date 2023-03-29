import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) { }

  home() {
    this.router.navigate(['/home']);
  }

  onLogin(loginForm: any) {
    console.log(loginForm.value);
    const { customerEmail, customerPassword } = loginForm.value;
    if (!this.isAdmin(customerEmail, customerPassword)) {
      this.userService.login(loginForm.value).subscribe((data: any) => {
        if (data) {
          localStorage.setItem("id", data['customerId']);
          this.home();
        } else {
          alert("invalid user")
        }
      })
    } else {
      this.router.navigateByUrl('/admin');
    }
  }

  isAdmin(email: string, password: string): boolean {
    const adminEmail = "admin@admin.com";
    const adminPassword = "admin";
    return adminEmail === email && password == adminPassword;
  }
}
