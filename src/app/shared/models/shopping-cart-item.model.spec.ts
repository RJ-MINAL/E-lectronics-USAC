import { ShoppingCartItem } from './shopping-cart-item.model';

describe('ShoppingCartItemModel', () => {
  let model: ShoppingCartItem;
  const item = { imageUrl: 'https://', price: 5, quantity: 2, title: 'Diodo' };

  beforeEach(() => {
    model = new ShoppingCartItem({ ...item, $key: 'itemId001' });
  });

  it('Deberia crear una instancia de shoppingCartItemModel', () => {
    expect(model).toBeTruthy();
  });

  it('Deberia asignar precio 5, cantidad 2 y valores strings de forma correcta', () => {
    expect(model.$key).toContain('itemId001');
    expect(model.imageUrl).toContain('https://');
    expect(model.title).toContain('Diodo');
    expect(model.price).toBe(5);
    expect(model.quantity).toBe(2);
  });

  it('Deberia retornar 10 como resultado de precio x cantidad', () => {
    expect(model.totalPrice).toBe(10);
  });
});
