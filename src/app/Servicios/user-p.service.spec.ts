import { TestBed } from '@angular/core/testing';

import { UserPService } from './user-p.service';

describe('UserPService', () => {
  let service: UserPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
