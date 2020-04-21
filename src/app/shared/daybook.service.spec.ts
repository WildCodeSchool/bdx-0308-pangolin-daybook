import { TestBed } from '@angular/core/testing';

import { DaybookService } from './daybook.service';

describe('DaybookService', () => {
  let service: DaybookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaybookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
