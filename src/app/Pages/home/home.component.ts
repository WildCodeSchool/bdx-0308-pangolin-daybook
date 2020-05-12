import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dbk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  env = environment;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userToken')) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
