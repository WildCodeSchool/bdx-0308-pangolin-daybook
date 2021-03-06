import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaybookService } from '../shared/daybook.service';
import { Daybook } from '../Models/daybook';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Form2Guard implements CanActivate {
  constructor(private daybookService: DaybookService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
return this.daybookService.getTodayDaybook().pipe(map((daybook: Daybook) => {
  if (daybook.canGoToFormStep2()) {
   return true;
  } else {
    this.router.navigateByUrl('/dashboard');
    return false;
  }
}));

    }
  }


