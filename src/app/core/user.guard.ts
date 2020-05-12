import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { map, catchError } from 'rxjs/operators';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router , private userService: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('userToken')) {
      return this.userService.getMe().pipe(map((user: User) => true), catchError((error) => of(false)));
      } else {
        this.router.navigateByUrl('/');
        return false;
      }
    }
}
