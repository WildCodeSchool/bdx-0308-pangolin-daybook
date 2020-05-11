import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';

@Component({
  selector: 'dbk-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit, OnChanges {

  @Input() daybookSelected: Daybook;
  sortedTasks: TasksByImportance[];

  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {
    this.sortedTasks = this.daybookSelected.getTasksByImportance();
  }
ngOnChanges(): void {
  this.sortedTasks = this.daybookSelected.getTasksByImportance();
}
  classMethod(taskArray) {
    if (taskArray.name === 'Primordiales') {
      return 'priorities primordiales';
    } else if (taskArray.name === 'Importantes') {
      return 'priorities importantes';
    } else if (taskArray.name === 'Facultatives') {
      return 'priorities facultatives';
    } else {
      return 'nonfinies';
  }
}

displayTaskArray(taskArray) {
  if (taskArray.tasks === []) {
    return false;
  } else {
    return true;
  }

}
}
