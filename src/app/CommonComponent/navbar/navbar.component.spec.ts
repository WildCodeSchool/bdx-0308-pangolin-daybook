import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';


fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should items array is created', () => {
    expect(component.items).toBeTruthy();
  });

  it('should find the <h1> with fixture.debugElement.nativeElement)', () => {
    component.homePage = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h1'))).toBeTruthy();
  });
});
