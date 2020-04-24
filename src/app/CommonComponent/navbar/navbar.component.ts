import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'dbk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() homePage: boolean;
  @Input() navigationNeeded: boolean;
  @Input() daybookNeeded: boolean;


  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Menu du Pangolin',
      items: [
          {label: 'Mon Dashboard', routerLink:  ['/dashboard']},
          {label: 'Se déconnecter'}
      ]
  }];

  }

}
