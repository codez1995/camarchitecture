import { TestBed } from '@angular/core/testing';

import { BaseElementService } from './base-element.service';

describe('BaseElementService', () => {
  let service: BaseElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
