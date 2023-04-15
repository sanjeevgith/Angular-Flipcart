import { TestBed } from '@angular/core/testing';

import { EditadmindetailsService } from './editadmindetails.service';

describe('EditadmindetailsService', () => {
  let service: EditadmindetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditadmindetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
