import { TestBed } from '@angular/core/testing';

import { Form2Guard } from './form2.guard';

describe('Form2Guard', () => {
  let guard: Form2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Form2Guard);
  });

});
