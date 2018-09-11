import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from "../models/shopping-cart.model";
import { Product } from "../models/product.model";
import "rxjs/add/operator/map";

@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object("shopping-carts/" + cartId)
      .map(x => new ShoppingCart(x.items));
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }

  private create() {
    return this.db.list("/shopping-carts").push({
      dateCreated: new Date().getTime()
    });
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object("shopping-carts/" + cartId + "/items").remove();
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);  
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


  private async updateItem(product: Product, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId,product.$key);


  }

}
