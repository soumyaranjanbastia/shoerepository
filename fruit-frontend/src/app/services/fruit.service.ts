import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  baseUrl = 'http://localhost:1205/api/v1/product';
  constructor(private http: HttpClient) {}

  getAllFruit() {
    return this.http.get(this.baseUrl);
  }
}
