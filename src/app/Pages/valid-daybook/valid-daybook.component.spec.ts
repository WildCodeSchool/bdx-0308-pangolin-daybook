import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidDaybookComponent } from './valid-daybook.component';

describe('ValidDaybookComponent', () => {
  let component: ValidDaybookComponent;
  let fixture: ComponentFixture<ValidDaybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidDaybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidDaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
