import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;

  beforeEach(() => {
    component = new ProductFormComponent();
  });

  it('El componente ProductForm deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('El componente deberia tener un objeto llamado product', () => {
    expect(component.product).toBeTruthy();
  });
});
