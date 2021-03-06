import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
    }
  }

  get totalPrice() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.totalPrice;
    }
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count;
  }
}
