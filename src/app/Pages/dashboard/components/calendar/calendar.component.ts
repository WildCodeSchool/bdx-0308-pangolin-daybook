import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbk-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Output() datesSelected: EventEmitter<Date[]> = new EventEmitter();
  rangeDates: Date[];


constructor() { }
ngOnInit(): void {  }

rangeDate() {
  const date = new Date(this.rangeDates[0]);
  date.setDate(date.getDate() + 6);
  const dateArray = [this.rangeDates[0], date];
  this.rangeDates = dateArray;
 }

sendDateArray() {
  this.datesSelected.emit(this.rangeDates);
}
}
