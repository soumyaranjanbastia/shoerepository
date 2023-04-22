import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1205/api/v1/user';
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }

  login(user: any) {
    return this.http.post(this.baseUrl + "/login", user);
  }

  addCart(product: any) {
    product['customerId'] = localStorage.getItem('id');
    return this.http.post(this.baseUrl + '/cart', product);
  }

  order() {
    const id = localStorage.getItem('id');
    return this.http.get(this.baseUrl + '/order/' + id);
  }

  allOrder() {
    const id = localStorage.getItem('id');
    return this.http.get(this.baseUrl + '/order/all/' + id);
  }

  allCart() {
    const id = localStorage.getItem('id');
    return this.http.get(this.baseUrl + '/cart/all/' + id);
  }

  removeCart(id: string) {
    return this.http.get(this.baseUrl + '/cart/remove/' + id)
  }
}
