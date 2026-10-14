import { TestBed } from '@angular/core/testing';
import { Aidp } from './aidp';

describe('Aidp', () => {
  let service: Aidp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aidp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
