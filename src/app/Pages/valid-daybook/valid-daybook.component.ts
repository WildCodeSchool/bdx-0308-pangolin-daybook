import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';
import { Daybook } from 'src/app/Models/daybook';
import { Task } from 'src/app/Models/task';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'dbk-valid-daybook',
  templateUrl: './valid-daybook.component.html',
  styleUrls: ['./valid-daybook.component.scss']
})
export class ValidDaybookComponent implements OnInit {

  dayBookAll: Daybook;
  dayBookSorted: TasksByImportance[];


  constructor(private daybookService: DaybookService, private confirmationService: ConfirmationService, private route: Router) { }

  ngOnInit(): void {
    this.daybookService.getTodayDaybook().subscribe((daybook) => {
      this.dayBookAll = daybook;
      this.dayBookSorted = daybook.getTasksByImportanceForForm2();
    });
  }



  fonction(task: Task) {
    this.dayBookAll.taskList.find((e) => e.id === task.id).taskChecked = task.taskChecked;
    this.daybookService.edit(this.dayBookAll, this.dayBookAll.id).subscribe((e) => this.dayBookAll = new Daybook(e));
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Si vous confirmez votre Journal vous ne pourrez plus le modifier !',
      accept: () => {
    this.dayBookAll.finished = true;
    this.daybookService.edit(this.dayBookAll, this.dayBookAll.id).subscribe((e) => {
       this.dayBookAll = e;
       this.route.navigateByUrl('/resume-journal');
      });
      }
    });
   }

   daybookClass(index) {
    if (index === 0) {
      return 'sticker primordiales';
    } else if (index === 1) {
      return 'sticker importantes';
    } else {
      return 'sticker facultatives';
    }
   }

  }
