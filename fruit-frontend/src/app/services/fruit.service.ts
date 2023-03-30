import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  baseUrl = 'http://localhost:1205/api/v1/product';

  constructor(private http: HttpClient) { }

  getAllFruit() {
    return this.http.get(this.baseUrl);
  }

  getFruits(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getFruit(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + `/${id}`);
  }

  saveFruit(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  removeFruit(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
