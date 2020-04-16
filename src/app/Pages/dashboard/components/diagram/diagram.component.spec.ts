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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create barchart ', () => {
    expect(barstack).toBeTruthy();
  });
  it('should create PieGrid ', () => {
    expect(piegrid).toBeTruthy();
  });
  it ('should display GridPieChart component', () => {
    expect(de.nativeElement.querySelector('ngx-charts-pie-grid')).toBeTruthy();
  });
  it(`Shouldn't display StackedBar component`, () => {
    expect(de.nativeElement.querySelector('ngx-charts-bar-vertical-stacked')).toBeNull();
  });
  it ('Should display StackedBar component when the selector value is equal to stackedBar', () => {
    component.diagramStyle = 'stackedBar';
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('ngx-charts-bar-vertical-stacked')).toBeTruthy();
      });
  it ('Should not display GridPie component when the selector value is equal to stackedBar', () => {
        component.diagramStyle = 'stackedBar';
        fixture.detectChanges();
        expect(de.nativeElement.querySelector('ngx-charts-pie-grid')).toBeNull();
          });
    });

