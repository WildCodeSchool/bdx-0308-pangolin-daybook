import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'https://api.witpoc.com/tasks/';


  constructor(private http: HttpClient) {
   }

   edit(task, id): Observable<Task> {
     return this.http.put<Task>(this.url + id, task);
   }
   delete(id): Observable<Task> {
     return this.http.delete<Task>(this.url + id);
   }
}
