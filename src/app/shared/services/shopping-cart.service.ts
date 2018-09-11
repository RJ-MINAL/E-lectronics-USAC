import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db
      .object('shopping-carts/' + cartId)
      .map(x => new ShoppingCart(x.items));
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('shopping-carts/' + cartId + '/items').remove();
  }
}
