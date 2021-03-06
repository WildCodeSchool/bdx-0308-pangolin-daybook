import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import { TaskService } from 'src/app/shared/task.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'dbk-create-daybook',
  templateUrl: './create-daybook.component.html',
  styleUrls: ['./create-daybook.component.scss']
})
export class CreateDaybookComponent implements OnInit {
  showEdit = false;
  importance = [];
  daybook: Daybook = new Daybook();
  task: Task = new Task();
  daybookOfTheDay: Daybook;
  index: number;
  taskID: number;


  constructor(private daybookService: DaybookService, private taskService: TaskService, private route: Router,
              private confirmationService: ConfirmationService) {
    this.importance = [
      { label: 'primordiale', value: 3 },
      { label: 'important', value: 2 },
      { label: 'facultative', value: 1 },
    ];
    this.task.importance = 2;
  }

  ngOnInit(): void {
    this.daybookService.getTodayDaybook().subscribe((daybookOfTheDay) => {
      if (daybookOfTheDay) {
        this.daybook = daybookOfTheDay;
        this.task.daybook.id = daybookOfTheDay.id ;
     } else {
       this.daybookService.post(new Daybook()).subscribe((newDaybook) => {
         this.daybook = newDaybook;
         this.task.daybook.id = daybookOfTheDay.id;
        });
     } });


  }
   showEditForm(task, i) {
     this.showEdit = true ;
     this.task.title = task.title;
     this.task.importance = task.importance;
     this.index = i;
     this.taskID = task.id;

   }
   editTask() {
     this.daybook.taskList[this.index].title = this.task.title;
     this.daybook.taskList[this.index].importance = this.task.importance;
     this.daybookService.edit(this.daybook, this.daybook.id).subscribe((e) => this.daybook = new Daybook(e));
     this.showEdit = false;
     this.task.title = '';
   }
   deleteTask(task, i) {
     this.taskService.delete(task.id).subscribe((e) => this.daybook.taskList.splice(i, 1));
   }
  addTask() {
    this.daybook.taskList.push(this.task);
    this.daybookService.edit(this.daybook , this.daybook.id).subscribe((edited) => this.daybook = new Daybook(edited));
    this.task.title = '';
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Si vous confirmez votre Journal vous ne pourrez plus le modifier !',
      accept: () => {
         this.daybook.validated = true;
         this.daybookService.edit(this.daybook, this.daybook.id).subscribe((e) => {
           this.daybook = e;
           this.route.navigateByUrl('/validation-journal');
        });

      }
  });


  }

  taskImportance(task) {
    if (task.importance === 3) {
      return 'importance primordiales';
    } else if (task.importance === 2) {
      return 'importance importantes';
    } else {
      return 'importance facultatives';
    }
}

taskTitle(task) {
  if (task.importance === 3) {
    return true;
  } else if (task.importance === 2) {
    return true;
  } else {
    return true;
  }
}

taskIcon(task) {
  if (task.importance === 3) {
    return './assets/push_pin_rose.png';
  } else if (task.importance === 2) {
    return './assets/push_pin_bleu.png';
  } else {
    return './assets/push_pin.png';
  }
}


}
