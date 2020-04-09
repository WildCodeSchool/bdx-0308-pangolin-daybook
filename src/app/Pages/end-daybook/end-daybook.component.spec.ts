import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDaybookComponent } from './end-daybook.component';

describe('EndDaybookComponent', () => {
  let component: EndDaybookComponent;
  let fixture: ComponentFixture<EndDaybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndDaybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
