import { ProductsComponent } from './products.component';
import { ProductService } from '../shared/services/product.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service: ProductService;

  beforeEach(() => {
    service = new ProductService(null);
    component = new ProductsComponent(service);
  });

  it('ProductsComponent deberia crearse', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
