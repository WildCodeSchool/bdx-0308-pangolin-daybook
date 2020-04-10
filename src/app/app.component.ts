import { Component } from '@angular/core';
@Component({
  selector: 'dbk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daybook';
  val2 = 30;
  data: any;
  rangeDates: Date[];
}

