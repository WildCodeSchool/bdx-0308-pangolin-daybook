import { Component, OnInit } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';
import { DaybookService } from 'src/app/shared/daybook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'dbk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  datesFromCalendar: Date[];
  daybookOfTheWeekSelected: Daybook[];
  daybookChosen: Daybook;
  daybookoftheDay: Daybook;
  user: User;
  canLoad = false;
  constructor(private daybookService: DaybookService, private route: ActivatedRoute, private userService: UserService,
              private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('userToken')) {
      this.route.paramMap.subscribe((param) => {
          this.userService.setToken(param.get('token'));
          this.userService.getMe().subscribe((user) => {
            this.user = user;
            this.canLoad = true;
          });
         });
        } else if (this.userService.currentUser) {
      this.canLoad = true;
    } else if (!this.userService.currentUser) {
      this.userService.getMe().subscribe((user) => {
        this.user = user;
        this.canLoad = true;
      });
    }
    this.daybookService.getTodayDaybook().subscribe((daybook) => {
      this.daybookoftheDay = daybook;
      this.daybookChosen = daybook;
    });
    this.daybookService.getAll().subscribe((daybooks) => {
      if (daybooks === []) {
          this.daybookService.post(new Daybook()).subscribe((newDaybook) => {
            this.showPopup();
            this.daybookoftheDay = newDaybook;
            this.daybookChosen = newDaybook;
          });
      }
    });
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const endDate = this.changeDateFormat(today).toString();
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() - 6 );
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
    return this.datePipe.transform(date, 'MMddyyyy');
  }
  changeDaybookDetails($event) {
this.daybookChosen = this.daybookOfTheWeekSelected.find((daybook) => daybook.id === $event);
  }
  confirm() {
    document.getElementById('first-connexion').className = 'hide';
    document.getElementById('popup-opacity').className = 'hide';
    this.router.navigateByUrl('/daybook');
  }
  showPopup() {
    document.getElementById('first-connexion').className = 'show';
    document.getElementById('popup-opacity').className = 'transparance';
  }
}
