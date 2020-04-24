import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';
import { Daybook } from 'src/app/Models/daybook';
import { Task } from 'src/app/Models/task';
@Component({
  selector: 'dbk-valid-daybook',
  templateUrl: './valid-daybook.component.html',
  styleUrls: ['./valid-daybook.component.scss']
})
export class ValidDaybookComponent implements OnInit {
  dayBookSorted: TasksByImportance[];
  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {
    this.daybookService.getTodayDaybook().subscribe((daybook) => this.dayBookSorted = daybook.getTasksByImportance());

  }
  }

