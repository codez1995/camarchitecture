import { TestBed } from '@angular/core/testing';

import { BasePageService } from './base-page.service';

describe('BasePageService', () => {
  let service: BasePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
