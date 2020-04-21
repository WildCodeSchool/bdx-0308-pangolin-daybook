import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../Models/task';


@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  responsiveOptions;

  logBookArray: any[] = [];
  logBook1 = [{theme: 'Thème'}, {primordiale: ['Tâche 1']}, {importante: ['Tâche 2']}, {facultative: ['Tâche 3']}];
  logBook2 = [{theme: 'Thème'}, {primordiale: ['Tâche 4']}, {importante: ['Tâche 5']}, {facultative: ['Tâche 6']}];
  logBook3 = [{theme: 'Thème'}, {primordiale: ['Tâche 7']}, {importante: ['Tâche 8']}, {facultative: ['Tâche 9']}];
  logBook4 = [{theme: 'Thème'}, {primordiale: ['Tâche 10']}, {importante: ['Tâche 11']}, {facultative: ['Tâche 12']}];
  logBook5 = [{theme: 'Thème'}, {primordiale: ['Tâche 13']}, {importante: ['Tâche 14']}, {facultative: ['Tâche 15']}];
  logBook6 = [{theme: 'Thème'}, {primordiale: ['Tâche 16']}, {importante: ['Tâche 17']}, {facultative: ['Tâche 19']}];
  logBook7 = [{theme: 'Thème'}, {primordiale: ['Tâche 20']}, {importante: ['Tâche 21']}, {facultative: ['Tâche 22']}];

    constructor() { }

    ngOnInit() {
      this.logBookArray.push(this.logBook1, this.logBook2, this.logBook3, this.logBook4, this.logBook5, this.logBook6, this.logBook7);
  }
}
