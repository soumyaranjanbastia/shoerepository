import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor(private userService: UserService, private router: Router) {
    
  }

  onRegister(registerForm: any) {
    this.userService.registerUser(registerForm.value).subscribe(response => {
      this.registerSuccess();
      this.router.navigate(['/login'])
    })
  }

  registerSuccess() {
    Swal.fire({
      title: 'Thank you...',
      text: 'Registeration succesfully!',
      icon: 'success',
    });
  }
}
