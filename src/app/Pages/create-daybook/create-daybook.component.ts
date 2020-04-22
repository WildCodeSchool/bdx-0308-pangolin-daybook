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
  theme: string;
  priority = '2';
  importance = [];
  tasksList: Task[] = [];
  description: string;

  constructor(private daybookService: DaybookService) {
    this.importance = [
      {label : 'primordiale', value : '3'},
      {label : 'important', value : '2'},
      {label : 'facultative', value : '1'},
    ];
  }

  ngOnInit(): void {
    const allDaybook = this.daybookService.getAll();
  }

  addTask() {
    const newTask = new Task(this.description, parseInt(this.priority, 10));
    this.tasksList.push(newTask);
    this.description = '';
    this.priority = '2' ;
  }

  addDaybook() {

    console.log(this.tasksList);
    const test = new Daybook(this.theme, new Date() , this.tasksList);
    console.log(test);

    this.daybookService.post(test).subscribe();
  }

  deleteLogbook() {
  }
}

