import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from "./product-card.component";

describe("ProductCardComponent", () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
 //prueba unitaria
 //prettier
  it("Componente product-card deberia ser creado", () => {
    expect(component).toBeTruthy();
  });

  
  it("Deberia retornar 2 como cantidad de productos de items", () => {
    expect(component.product).toBe(2);
  });

});
