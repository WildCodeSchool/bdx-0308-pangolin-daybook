import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-end-daybook',
  templateUrl: './end-daybook.component.html',
  styleUrls: ['./end-daybook.component.scss']
})
export class EndDaybookComponent implements OnInit {

  finished: boolean;
  daybook: Daybook;
  daybookImportance = [];

constructor(public todayDaybook: DaybookService) { }

ngOnInit(): void {
    this.todayDaybook.getTodayDaybook().subscribe(data => {
      this.daybook = data;
      this.daybookImportance = this.daybook.getTasksByImportance();
      if (this.daybookImportance[3].tasks.length > 0) {
         this.finished = false;
        } else {
          this.finished = true;
        }
     });
  }
}
