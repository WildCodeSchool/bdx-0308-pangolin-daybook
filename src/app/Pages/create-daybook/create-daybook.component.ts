import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'dbk-create-daybook',
  templateUrl: './create-daybook.component.html',
  styleUrls: ['./create-daybook.component.scss']
})
export class CreateDaybookComponent implements OnInit {
  theme: string;
  priority = '2';
  importance = [];
   tasks: Task[] = [];
  description: string;

  constructor() {
    this.importance = [
      {label : 'primordiale', value : '3'},
      {label : 'important', value : '2'},
      {label : 'facultative', value : '1'},
    ];
  }

  ngOnInit(): void {
  }

  addTask() {
    const newTask = new Task(this.description, parseInt(this.priority, 10));
    console.log(this.priority);
    this.tasks.push(newTask);
    this.description = '';
    this.priority = '2' ;
  }

}
