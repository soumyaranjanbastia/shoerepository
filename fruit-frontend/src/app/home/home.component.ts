import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter = 1;
  searchItem = '';
  allProduct:any;
  title = 'project';

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.fruitService.getAllFruit().subscribe((data: any) => {
      this.allProduct = Array.from(data);
    });
  }
  counterClien(
    symbol: string,
    counter: HTMLElement,
    price_p: any,
    price_ptag: HTMLElement
  ) {
    const counterValue = +counter.innerText;
    const priceP = +price_p;

    if (symbol === '+') {
      counter.innerText = counterValue + 1 + '';
      price_ptag.innerText = priceP * +counter.innerText + '';
    } else if (counterValue > 1) {
      counter.innerText = counterValue - 1 + '';
      price_ptag.innerText = priceP * +counter.innerText + '';
    }
  }

  purchaseSuccess() {
    Swal.fire({
      title: 'Thank you...',
      text: 'You Purchased succesfully!',
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

    return Array.from( this.allProduct).filter((item: any) =>
      item.name.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
