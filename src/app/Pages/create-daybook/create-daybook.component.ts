import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'dbk-create-daybook',
  templateUrl: './create-daybook.component.html',
  styleUrls: ['./create-daybook.component.scss']
})
export class CreateDaybookComponent implements OnInit {

  theme: string;
  importance = '2';
  tasks: Task[] = [];
  description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addTask() {

    const newTask = new Task(this.description, parseInt(this.importance, 10));
    this.tasks.push(newTask);
    this.description = '';
    this.importance = '2' ;
  }

}
