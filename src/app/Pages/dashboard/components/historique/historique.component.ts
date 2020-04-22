import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { TasksFilterForDiagram } from 'src/app/Models/tasks-filter-for-diagram';


@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  responsiveOptions;
  daybookFiltre: TasksFilterForDiagram[];

    constructor(public daybookService: DaybookService) { }

    ngOnInit() {
      this.daybookService.getAll().subscribe((data) => {
        this.daybookFiltre = data.find(element => element.id === 66).getNbTasksByImportance();
        console.log(this.daybookFiltre);

      });
    }
}
