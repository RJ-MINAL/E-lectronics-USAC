import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityComponent } from './product-quantity.component';

describe('ProductQuantityComponent', () => {
  let component: ProductQuantityComponent;

  let fixture: ComponentFixture<ProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //pruebas unitarias
    //prettier
  it('componente product quantity deberia de ser creado', () => {
    expect(component).toBeTruthy();
  });

  /*it("ShoppingCartComponent deberia crearse", () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });*/

});
