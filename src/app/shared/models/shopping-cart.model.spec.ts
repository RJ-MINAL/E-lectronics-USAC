import { ShoppingCart } from './shopping-cart.model';
import { ShoppingCartItem } from './shopping-cart-item.model';

describe('ShoppingCartModel', () => {
  let model: ShoppingCart;

  const item = { imageUrl: 'https://', price: 5, quantity: 2, title: 'Diodo' };
  const cartItem1 = new ShoppingCartItem({ ...item, $key: 'itemId001' });
  const cartItem2 = new ShoppingCartItem({ ...item, $key: 'itemId002' });
  const itemMap = { cartItem1, cartItem2 };

  beforeEach(() => {
    model = new ShoppingCart(itemMap);
  });

  it('Deberia crear una instancia de shoppingCartModel con 2 tipos de productos en el carro', () => {
    expect(model).toBeTruthy();
    expect(model.items.length).toBe(2);
  });

  it('Deberia crear una instancia de shoppingCartModel con 0 productos en el carro', () => {
    model = new ShoppingCart(null);
    expect(model).toBeTruthy();
    expect(model.items.length).toBe(0);
  });

  it('Deberia retornar 20 como precio total de la compra', () => {
    expect(model.totalPrice).toBe(20);
  });

  it('Deberia retornar 4 como cantidad total de items en el carro', () => {
    expect(model.totalItemsCount).toBe(4);
  });


});
