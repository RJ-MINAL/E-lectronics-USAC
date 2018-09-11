import { ProductCardComponent } from './../product-card/product-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent, ProductCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente ProductForm deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('El componente deberia tener un objeto llamado product', () => {
    expect(component.product).toBeTruthy();
  });

  // it('el componente deberia ser creado', async(() => {
  //   const fixture = TestBed.createComponent(ProductFormComponent);
  //   const comp = fixture.debugElement.componentInstance;
  //   expect(comp).toBeTruthy();
  // }));

  // it('deberia tener un objeto producto', async(() => {
  //   const fixture = TestBed.createComponent(ProductFormComponent);
  //   const comp = fixture.debugElement.componentInstance;
  //   expect(comp.product).toBeTruthy();
  // }));
});
