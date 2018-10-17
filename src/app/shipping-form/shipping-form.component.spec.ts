import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../shared/services/auth.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserService} from '../shared/services/user.service';
import {OrderService} from '../shared/services/order.service';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';

describe('ShippingFormComponent', () => {
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[AuthService, UserService, OrderService,ShoppingCartService],
      declarations: [ ShippingFormComponent ],
      imports:[FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
