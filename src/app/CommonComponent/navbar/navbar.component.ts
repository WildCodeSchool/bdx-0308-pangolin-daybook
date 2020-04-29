import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Daybook } from 'src/app/Models/daybook';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dbk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() homePage: boolean;
  @Input() navigationNeeded: boolean;
  @Input() daybookNeeded: boolean;
  @Input() daybook: Daybook;
git;
  items: MenuItem[];

  constructor(private daybookService: DaybookService, private router: Router) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Menu du Pangolin',
      items: [
          {label: 'Mon Dashboard', routerLink:  ['/dashboard']},
          {label: 'Se déconnecter'}
      ]
  }];


  }
  goToForm() {
    if (this.daybook.finished) {
      this.router.navigateByUrl('/end');
    } else if (this.daybook.validated) {
      this.router.navigateByUrl('/valid');
    } else {
      this.router.navigateByUrl('/daybook');
    }
  }
}
