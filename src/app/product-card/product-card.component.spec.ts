import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;

  beforeEach(() => {
    component = new ProductCardComponent();
  });

  it('Componente product-card deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Componente product-card deberia tener variable showActions con valor verdadero', () => {
    expect(component.showActions).toBeTruthy();
  });
});
