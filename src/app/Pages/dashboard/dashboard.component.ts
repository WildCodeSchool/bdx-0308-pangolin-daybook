import { Component, OnInit } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';
import { DaybookService } from 'src/app/shared/daybook.service';

@Component({
  selector: 'dbk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  datesFromCalendar: Date[];
  daybookOfTheWeekSelected: Daybook[];
  daybook: Daybook;
  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {
    this.daybookService.getTodayDaybook().subscribe((e) => this.daybook = e);
    const today = this.changeDateFormat(new Date()).toString();
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() - 7);
    const startDate = this.changeDateFormat(defaultDate).toString();
    this.daybookService.getDaybookOfTheWeek(startDate, today).subscribe(
      (e) => this.daybookOfTheWeekSelected = e);
  }

  datesReceived($event) {
    this.datesFromCalendar = $event;
    console.log(this.datesFromCalendar);
    const date1 = this.changeDateFormat(this.datesFromCalendar[0]).toString();
    const date2 = this.changeDateFormat(this.datesFromCalendar[1]).toString();

    this.daybookService.getDaybookOfTheWeek(date1, date2).subscribe(
      (e) => this.daybookOfTheWeekSelected = e);
  }

  changeDateFormat(date: Date) {
    return  ('0' + (date.getMonth() + 1)).slice(-2)
    + ('0' + (date.getDate())).slice(-2)
    + date.getFullYear();
  }
}
