import { ShoppingCart } from '../shared/models/shopping-cart.model';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let service: ShoppingCartService;

  beforeEach(() => {
    service = new ShoppingCartService(null);
    component = new ShoppingCartComponent(service);
  });
});
