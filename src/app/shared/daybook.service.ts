import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Daybook } from '../Models/daybook';

@Injectable({
  providedIn: 'root'
})
export class DaybookService {

  url = 'http://api.witpoc.com/daybooks/';

  constructor(private http: HttpClient) {
   }

  getAll(): Observable<Daybook[]> {

    return this.http.get<Daybook[]>(this.url).pipe(map((dayBooksFromServer) => dayBooksFromServer.map((daybook) => new Daybook(daybook))));
  }

  post(daybook: Daybook): Observable<Daybook> {
    return this.http.post<Daybook>(this.url, daybook);
  }

  edit(daybook, id): Observable<Daybook> {
    return this.http.put<Daybook>(this.url + id, daybook);
  }

  delete(id): Observable<Daybook> {
    return this.http.delete<Daybook>(this.url + id);
  }
  isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear();
  }

  getTodayDaybook(): Observable<Daybook> {
     return this.getAll().pipe(map((daybooks) => daybooks.find((e) => this.isToday(new Date(e.date)))));
  }

  getDaybookOfTheWeek(startDate, endDate): Observable<Daybook[]> {
    return this.http.get<Daybook[]>(this.url + '?start=' + startDate + '&end=' + endDate)
    .pipe(map((dayBooksFromServer) => dayBooksFromServer.map((daybook) => new Daybook(daybook))));
  }
  Isvalidated(): Observable<boolean> {
    return this.getTodayDaybook().pipe(map((daybook) => daybook.validated));
  }
  IsFinished(): Observable<boolean> {
    return this.getTodayDaybook().pipe(map((daybook) => daybook.finished));
  }
}
