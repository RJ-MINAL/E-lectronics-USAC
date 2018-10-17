import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersComponent } from './my-orders.component';
import {AuthService} from '../shared/services/auth.service';
import {OrderService} from '../shared/services/order.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../../environments/environment';
import { ActivatedRoute, Data } from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';
import {Observable} from 'rxjs/Observable';


describe('Componente my-orders', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, OrderService, UserService, ShoppingCartService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({id: '1'})
          }
        }
        ],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
      ],
      declarations: [ MyOrdersComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente my-orders debería de ser creado', () => {
    expect(component).toBeTruthy();
  });
});
