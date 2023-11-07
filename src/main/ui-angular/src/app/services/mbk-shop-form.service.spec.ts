import { TestBed } from '@angular/core/testing';

import { MbkShopFormService } from './mbk-shop-form.service';

describe('MbkShopFormService', () => {
  let service: MbkShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbkShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
