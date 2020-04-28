import { TestBed } from '@angular/core/testing';

import { Form1Guard } from './form1.guard';

describe('Form1Guard', () => {
  let guard: Form1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Form1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
