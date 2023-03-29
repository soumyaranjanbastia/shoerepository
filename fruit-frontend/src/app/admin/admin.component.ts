import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[] = [];

  constructor(private fruitService: FruitService) { }
  ngOnInit(): void {
    this.fruitService.getFruits().subscribe(products => {
      this.products = products;
    })
  }
}
