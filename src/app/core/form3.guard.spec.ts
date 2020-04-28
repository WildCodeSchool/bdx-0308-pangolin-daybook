import { TestBed } from '@angular/core/testing';

import { Form3Guard } from './form3.guard';

describe('FormGuard', () => {
  let guard: Form3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Form3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
