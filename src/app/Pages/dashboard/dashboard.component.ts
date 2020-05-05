import { Component, OnInit } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';
import { DaybookService } from 'src/app/shared/daybook.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'dbk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  datesFromCalendar: Date[];
  daybookOfTheWeekSelected: Daybook[];
  daybook: Daybook;
  constructor(private daybookService: DaybookService, private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    if (!localStorage.getItem('userToken')) {
      this.router.paramMap.subscribe((param) => {
          this.userService.setToken(param.get('token'));
         });
    }
    this.daybookService.getTodayDaybook().subscribe((e) => this.daybook = e);
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const endDate = this.changeDateFormat(today).toString();
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() - 5 );
    const startDate = this.changeDateFormat(defaultDate).toString();
    this.daybookService.getDaybookOfTheWeek(startDate, endDate).subscribe(
      (e) => this.daybookOfTheWeekSelected = e);

  }

  datesReceived($event) {
    this.datesFromCalendar = $event;
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
