import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueComponent } from './historique.component';
import { DaybookService } from 'src/app/shared/daybook.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('HistoriqueComponent', () => {
  let component: HistoriqueComponent;
  let fixture: ComponentFixture<HistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
