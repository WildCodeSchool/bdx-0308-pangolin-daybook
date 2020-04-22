import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';


@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  responsiveOptions;

  // tslint:disable-next-line: max-line-length
  daybookArray: Daybook;
  daybookNonFiltre: Daybook;

    constructor(public daybookService: DaybookService) { }

    ngOnInit() {
      this.daybookService.getAll().subscribe((data) => {
        this.daybookNonFiltre = data.find(element => element.id === 66);
      });
    }

  test() {
    console.log(this.daybookNonFiltre);
    console.log(this.daybookNonFiltre.taskList);
    console.log(this.daybookNonFiltre.getTasksByImportance());
  }
}
