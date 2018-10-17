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

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente ProductForm deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('El componente deberia tener un objeto llamado product', () => {
    expect(component.product).toBeTruthy();
  });

  it('Si la ruta tiene un ID como parametro se deberia llamar al metodo GET de productService', () => {
    const spyRoute = spyOn(
      component.route.snapshot.paramMap,
      'get'
    ).and.returnValue(10);

    const spyService = spyOn(component.productService, 'get').and.returnValue(
      Observable.from([1, 2, 3])
    );

    component.ngOnInit();

    expect(spyRoute).toHaveBeenCalled();
    expect(component.productId).toBe(10);
    expect(spyService).toHaveBeenCalled();
    expect(component.product).toBe(1);
  });

  it('Si la ruta NO tiene un ID como parametro NO se deberia llamar al metodo GET de productService', () => {
    const spyService = spyOn(component.productService, 'get').and.returnValue(
      Observable.from([1, 2, 3])
    );

    component.ngOnInit();

    expect(component.productId).toBeNull();
    expect(spyService).not.toHaveBeenCalled();
  });

  it('El metodo guardar deberia llamar al metodo UPDATE de productService si existe un productId', () => {
    component.productId = 1;
    const spy = spyOn(component.productService, 'update').and.callFake(() => {
      return Observable.empty;
    });

    component.save(component.product);

    expect(spy).toHaveBeenCalled();
  });

  it('El metodo guardar NO deberia llamar al metodo UPDATE de productService si NO existe un productId', () => {
    component.productId = null;
    const spy = spyOn(component.productService, 'update').and.callFake(() => {
      return Observable.empty;
    });

    component.save(component.product);

    expect(spy).not.toHaveBeenCalled();
  });

  it('En el metodo DELETE si el usuario CONFIRMA la operacion se deberia llamar al metodo DELETE de productService', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(component.productService, 'delete').and.returnValue(true);

    component.delete();

    expect(spy).toHaveBeenCalled();
  });

  it('En el metodo DELETE si el usuario CANCELA la operacion se deberia llamar al metodo DELETE de productService', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(component.productService, 'delete').and.returnValue(true);

    component.delete();

    expect(spy).not.toHaveBeenCalled();
  });
});
