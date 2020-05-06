import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';

@Component({
  selector: 'dbk-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  daybookSelected: Daybook;
  sortedTasks: TasksByImportance[];

  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {

    this.daybookService.getTodayDaybook().subscribe((daybook) => {
      this.daybookSelected = daybook;
      this.sortedTasks = daybook.getTasksByImportance();
    });

  }
}

