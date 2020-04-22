import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';

@Component({
  selector: 'dbk-create-daybook',
  templateUrl: './create-daybook.component.html',
  styleUrls: ['./create-daybook.component.scss']
})
export class CreateDaybookComponent implements OnInit {
  theme: string;
  priority = '2';
  importance = [];
  tasksList: Task[] = [];
  description: string;
  currentDaybook: Daybook;
  daybooks: Daybook[] = [];
  daybookTest: Daybook;
  DaybookTestSorted: TasksByImportance[];

  constructor(private daybookService: DaybookService) {
    this.importance = [
      { label: 'primordiale', value: '3' },
      { label: 'important', value: '2' },
      { label: 'facultative', value: '1' },
    ];
  }

  ngOnInit(): void {
    const isToday = (someDate) => {
      const today = new Date();
      return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear();
    };
    this.daybookService.getAll().subscribe((daybook) => this.currentDaybook = daybook.find((e) => isToday(new Date(e.date))));
  }

  addTask() {
    const newTask = new Task(this.description, parseInt(this.priority, 10));
    this.tasksList.push(newTask);
    this.description = '';
    this.priority = '2';
  }

  addDaybook() {
    const test = new Daybook(this.theme, new Date(), this.tasksList);
    this.daybookService.post(test).subscribe();
  }
}

