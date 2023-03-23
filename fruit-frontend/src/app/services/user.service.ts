import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1205/api/v1/user';
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }
}
