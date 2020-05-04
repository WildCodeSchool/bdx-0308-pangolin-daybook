import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private static BASE_URL = 'https://api.witpoc.com/users';
 token: string;

 constructor(private http: HttpClient) { }

setToken(token) {
  this.token = token;
}
getToken() {
  return this.token;
}
getMe() {
 return this.http.get(UserService.BASE_URL + '/me');
}
}
