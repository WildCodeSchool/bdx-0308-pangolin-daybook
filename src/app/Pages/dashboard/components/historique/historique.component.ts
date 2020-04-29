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

  constructor(public daybookService: DaybookService) { }

    ngOnInit() {
      this.daybookService.getAll().subscribe((data) => {
        this.daybookFiltre = data.find(element => element.id === 1).getNbTasksByImportance();
        console.log(this.daybookFiltre);

      });
    }



}
