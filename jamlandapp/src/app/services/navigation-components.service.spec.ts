import { TestBed } from '@angular/core/testing';

import { NavigationComponentsService } from './navigation-components.service';

describe('NavigationComponentsService', () => {
  let service: NavigationComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
