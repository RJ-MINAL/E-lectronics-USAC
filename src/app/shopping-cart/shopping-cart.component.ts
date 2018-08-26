import { ShoppingCartService } from "./../services/shopping-cart.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from "../models/shopping-cart.model";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
