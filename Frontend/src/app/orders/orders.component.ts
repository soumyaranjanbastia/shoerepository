import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder() {
    this.userService.allOrder().subscribe((reponse: any) => {
      this.orders = Array.from(reponse);
    });

  }
}
