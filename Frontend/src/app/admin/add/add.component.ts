import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product = {
    productId: '',
    productDescription: '',
    productImageURL: '',
    productName: '',
    productPrice: 0
  };

  constructor(private fruitService: FruitService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(param => {
      if (param['id']) {
        this.getProduct(param['id']);
      }
    });
  }

  onSubmit(productForm: any) {
    this.fruitService.saveFruit(this.product).subscribe(result => {
      this.router.navigateByUrl('/admin');
    })
  }

  getProduct(id: string) {
    this.fruitService.getFruit(id).subscribe(product => {
      this.product = product;
    })
  }
}
