import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts = [];
  total = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllCart();
  }

  getAllCart() {
    this.userService.allCart().subscribe((reponse: any) => {
      this.carts = Array.from(reponse['products']);
      this.total = +reponse['total'];
    });

  }

  onRemove(id: string) {
     this.userService.removeCart(id).subscribe((response: any) => {
      this.getAllCart();
      this.purchaseSuccess("Item removed");

    })
  }
  onOrder() {
    this.userService.order().subscribe(response => {
      this.getAllCart();
      this.purchaseSuccess("order placed")
    })
  }
  purchaseSuccess(text: string) {
    Swal.fire({
      title: 'Thank you...',
      text,
      icon: 'success',
    });
  }

}
