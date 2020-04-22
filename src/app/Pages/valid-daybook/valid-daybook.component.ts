import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';
@Component({
  selector: 'dbk-valid-daybook',
  templateUrl: './valid-daybook.component.html',
  styleUrls: ['./valid-daybook.component.scss']
})
export class ValidDaybookComponent implements OnInit {
  dayBookSorted: TasksByImportance[];
  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {
    this.daybookService.getAll().subscribe(
      (daybooks) => this.dayBookSorted = daybooks.find(
        (daybook) => daybook.id === 66).getTasksByImportance());

    const test = () => console.log(this.dayBookSorted);

    setTimeout(test, 3000);

  }
}
