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

import { ShoppingCartService } from "./services/shopping-cart.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ShoppingCartComponent],
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
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
