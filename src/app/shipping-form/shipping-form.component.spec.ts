import { TestBed, inject } from '@angular/core/testing';

import { ShippingFormService } from './shipping-form.component';

describe('ShippingFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingFormService]
    });
  });

  it('should be created', inject([ShippingFormService], (service: ShippingFormService) => {
    expect(service).toBeTruthy();
  }));
});
