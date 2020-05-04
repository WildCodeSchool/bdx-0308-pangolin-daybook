import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-end-daybook',
  templateUrl: './end-daybook.component.html',
  styleUrls: ['./end-daybook.component.scss']
})
export class EndDaybookComponent implements OnInit {

  finished: boolean;
  daybook: Daybook;
  daybookImportance = [];
  phrases: string[] = ['<h2><b>Bravo !</b> Journée terminée ! Ça mérite bien <b>une pause</b> non ?</h2>',
  '<h2><b>Belle petite journée</b>, ça mérite une <b>petite bière</b> ! (Avec modération!)',
  '<h2>Pas trop mal ça... On recommence <b>demain</b> ?',
  '<h2><b>おめでとう !</b> (Ça veut dire \'félicitations\' en <b>Japonais</b> !) '];
  phraseInjecte: string;

constructor(public todayDaybook: DaybookService) { }

ngOnInit(): void {
    this.todayDaybook.getTodayDaybook().subscribe(data => {
      this.daybook = data;
      this.daybookImportance = this.daybook.getTasksByImportance();
      if (this.daybookImportance[3].tasks.length > 0) {
         this.finished = false;
        } else {
          this.finished = true;
        }
     });

    const index = Math.floor(Math.random() * this.phrases.length);
    this.phraseInjecte = this.phrases[index];
  }
}
