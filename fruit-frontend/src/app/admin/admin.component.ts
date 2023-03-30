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
    this.getFruits();
  }

  onRemove(id: any) {
    if (confirm('Do you want to remove')) {
      this.fruitService.removeFruit(id).subscribe(response => {
        this.getFruits();
      });
    }
  }

  getFruits() {
    this.fruitService.getFruits().subscribe(products => {
      this.products = products;
    });
  }
}
