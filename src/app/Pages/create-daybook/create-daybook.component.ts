import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-create-daybook',
  templateUrl: './create-daybook.component.html',
  styleUrls: ['./create-daybook.component.scss']
})
export class CreateDaybookComponent implements OnInit {
  importance = [];
  daybook: Daybook = new Daybook();
  task: Task = new Task('', 2);

  constructor(private daybookService: DaybookService) {
    this.importance = [
      {label : 'primordiale', value : 3},
      {label : 'important', value : 2 },
      {label : 'facultative', value : 1 },
    ];
  }

  ngOnInit(): void {
    const allDaybook = this.daybookService.getAll();
  }

  addTask() {
    this.daybook.taskList.push(this.task);
  }

  addDaybook() {
    const newDaybook = new Daybook(this.daybook);
    this.daybookService.post(newDaybook).subscribe();
  }

  deleteLogbook() {
  }
}

