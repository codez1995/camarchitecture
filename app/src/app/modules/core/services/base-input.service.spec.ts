import { TestBed } from '@angular/core/testing';

import { BaseInputService } from './base-input.service';

describe('BaseInputService', () => {
  let service: BaseInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
