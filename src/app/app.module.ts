import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataTableModule } from 'angular-4-data-table';
import { AuthService } from './shared/services/auth.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UserService } from './shared/services/user.service';
import { ProductService } from './shared/services/product.service';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from './shared/services/auth-guard.service';
import {ShippingFormComponent} from './shipping-form/shipping-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ShippingFormComponent,
    ProductCardComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductQuantityComponent,
    AdminProductsComponent,
    MyOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'admin/products/:id', component: ProductFormComponent },
      { path: 'login', component: LoginComponent },
      
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: '**', component: ShoppingCartComponent }
      
    ])
  ],
  providers: [
    ShoppingCartService, 
    ProductService,
    AuthService,
    AuthGuard,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
