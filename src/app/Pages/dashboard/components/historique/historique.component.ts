import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import {ElementRef, NgZone } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  @Input() weekDaybookList: Daybook[];
  @Output() daybookChosen = new EventEmitter<number>();
responsiveOptions =
[
  {
    breakpoint: '1500px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 3,
  }
];

constructor(public daybookService: DaybookService, public el: ElementRef, public zone: NgZone) {
  Carousel.prototype.changePageOnTouch = (e, diff) => {};

  }

ngOnInit() {
  }

chooseDaybook(id) {
    this.daybookChosen.emit(id);
  }

}
