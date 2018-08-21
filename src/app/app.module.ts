import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ProductCardComponent } from "./product-card/product-card.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ShoppingCartComponent, ProductCardComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: "", component: ShoppingCartComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "**", component: ShoppingCartComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
