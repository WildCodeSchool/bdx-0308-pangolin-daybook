import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DaybookService } from './daybook.service';

describe('DaybookService', () => {
  let service: DaybookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    service = TestBed.inject(DaybookService);

  });
});
