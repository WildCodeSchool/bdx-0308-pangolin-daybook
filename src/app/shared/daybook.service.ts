import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Daybook } from '../Models/daybook';

@Injectable({
  providedIn: 'root'
})
export class DaybookService {

  url = 'http://api.witpoc.com/daybooks/';

  constructor(private http: HttpClient) { }

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
}
