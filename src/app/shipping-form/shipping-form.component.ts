import { OrderService } from '../shared/services/order.service';
import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../shared/models/shopping-cart.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Order } from '../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

}

