import { ActivatedRoute } from '@angular/router';
import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../shared/services/product.service';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let service: ProductService;
  let route: ActivatedRoute;

  beforeEach(() => {
    service = new ProductService(null);
    route = new ActivatedRoute();
    component = new ProductFormComponent(service, route);
  });

  it('El componente ProductForm deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('El componente deberia tener un objeto llamado product', () => {
    expect(component.product).toBeTruthy();
  });
});
