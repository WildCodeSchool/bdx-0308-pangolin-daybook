import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDaybookComponent } from './create-daybook.component';

describe('CreateDaybookComponent', () => {
  let component: CreateDaybookComponent;
  let fixture: ComponentFixture<CreateDaybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDaybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
