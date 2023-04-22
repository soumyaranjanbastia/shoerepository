import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FruitService } from '../services/fruit.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter = 1;
  searchItem = '';
  allProduct: any;
  title = 'project';
  showSide = false;
  constructor(
    private fruitService: FruitService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.fruitService.getAllFruit().subscribe((data: any) => {
      this.allProduct = Array.from(data).map((product: any) => ({
        ...product,
        counter: 1,
      }));
    });
  }
  counterClien(symbol: string, productId: number) {
    const productIndex = Array.from(this.allProduct).findIndex(
      (product: any) => product['productId'] === productId
    );

    const counter = this.allProduct[productIndex].counter;
    this.allProduct[productIndex].productPrice /= counter;

    if (symbol === '+') {
      this.allProduct[productIndex].counter++;
    } else if (counter - 1 > 0) {
      this.allProduct[productIndex].counter--;
    }

    this.allProduct[productIndex].productPrice *=
      this.allProduct[productIndex].counter;
  }

  addCart(productId: string, counter: number) {
    const product = { productId, counter };
    this.userService.addCart(product).subscribe((response) => {
      this.purchaseSuccess('Item Added');
    });
  }

  purchaseSuccess(text: string) {
    Swal.fire({
      title: 'Thank you...',
      text,
      icon: 'success',
    });
    setTimeout(() => {
      console.log('Timer complete!');
    }, 5000);
  }

  fruitsItems() {
    if (!this.searchItem) {
      return this.allProduct;
    }

    return Array.from(this.allProduct).filter((item: any) => {
      return item['productName']
        .toLowerCase()
        .includes(this.searchItem.toLowerCase());
    });
  }
}
