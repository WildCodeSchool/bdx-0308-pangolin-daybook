import { Component, OnInit, Input } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { TasksFilterForDiagram } from 'src/app/Models/tasks-filter-for-diagram';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  @Input() weekDaybookList: Daybook[];

  responsiveOptions;
  daybookFiltre: TasksFilterForDiagram[];
  todayDaybook: Daybook;
  daybookPrimordiale;

  constructor(public daybookService: DaybookService) { }

    ngOnInit() {
      this.daybookService.getTodayDaybook().subscribe(data => {
        this.todayDaybook = data;
        this.daybookFiltre = this.todayDaybook.getNbTasksByImportance();
        this.daybookPrimordiale = this.daybookFiltre[0];
        console.log(this.weekDaybookList);
        console.log(this.daybookFiltre);
        console.log(this.todayDaybook);
    });
  }

  test() {
    console.log(this.weekDaybookList);
  }
}
