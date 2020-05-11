import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private static BASE_URL = 'https://api.witpoc.com/users';
currentUser: User;
 constructor(private http: HttpClient) { }
setUser(user) {
  this.currentUser = user;
}
setToken(token) {
  localStorage.setItem('userToken', token);
}
getToken() {
  return localStorage.getItem('userToken');
}
getMe(): Observable<User> {
 return this.http.get<User>(UserService.BASE_URL + '/me');
}
}
