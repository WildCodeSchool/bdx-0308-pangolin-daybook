import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dbk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() homePage: boolean;
  @Input() daybookNeeded: boolean;
  @Input() userImgNeeded: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.homePage);

  }

}
