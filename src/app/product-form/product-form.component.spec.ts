import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs/Observable';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AdminProductsComponent } from '../admin/admin-products/admin-products.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DataTableModule } from 'angular-4-data-table';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductFormComponent,
        AdminProductsComponent,
        ProductCardComponent
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
          { path: 'admin/products', component: AdminProductsComponent },
          { path: 'admin/products/:id', component: ProductFormComponent }
        ])
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProductService]
    }).compileComponents();
  }));
});
