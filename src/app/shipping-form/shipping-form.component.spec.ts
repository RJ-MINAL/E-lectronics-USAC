import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';

describe('ShippingFormComponent', () => {
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente shipping deberia ser ', () => {
    expect(component).toBeTruthy();
  });

  it('carro de compras debe de contener productos para shipping', () => {
    expect(component.cart).toBeTruthy();
  });
});
