import { TestBed } from '@angular/core/testing';

import { FilesreviceService } from './filesrevice.service';

describe('FilesreviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilesreviceService = TestBed.get(FilesreviceService);
    expect(service).toBeTruthy();
  });
});
