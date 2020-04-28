import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagramComponent } from './diagram.component';
import { DebugElement } from '@angular/core';
import { PieGridComponent, BarVerticalStackedComponent } from '@swimlane/ngx-charts';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DiagramComponent', () => {
  let component: DiagramComponent;
  let fixture: ComponentFixture<DiagramComponent>;
  let de: DebugElement;
  let barstack: BarVerticalStackedComponent;
  let barfixture: ComponentFixture<BarVerticalStackedComponent>;
  let debar: DebugElement;
  let piegrid: PieGridComponent;
  let piefix: ComponentFixture<PieGridComponent>;
  let depie: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramComponent,
      BarVerticalStackedComponent,
      PieGridComponent,
    ],
    imports : [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    barfixture = TestBed.createComponent(BarVerticalStackedComponent);
    barstack = barfixture.componentInstance;
    debar = barfixture.debugElement;
    piefix = TestBed.createComponent(PieGridComponent);
    piegrid = piefix.componentInstance;
    depie = piefix.debugElement;
    fixture.detectChanges();
    barfixture.detectChanges();
    piefix.detectChanges();
  });

});
