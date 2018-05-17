import { TestBed, inject } from '@angular/core/testing';

import { CrashDataService } from './crash-data.service';

describe('CrashDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrashDataService]
    });
  });

  it('should be created', inject([CrashDataService], (service: CrashDataService) => {
    expect(service).toBeTruthy();
  }));
});
