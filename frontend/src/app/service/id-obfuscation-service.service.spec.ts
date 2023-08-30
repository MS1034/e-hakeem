import { TestBed } from '@angular/core/testing';

import { IdObfuscationServiceService } from './id-obfuscation-service.service';

describe('IdObfuscationServiceService', () => {
  let service: IdObfuscationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdObfuscationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
