import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { AuthService } from '../shared/services/auth.service';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCart } from '../shared/models/shopping-cart.model';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser  => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();
  }
}
