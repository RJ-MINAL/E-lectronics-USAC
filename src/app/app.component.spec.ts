import { TestBed, async } from "@angular/core/testing";

import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

import { ShoppingCartService } from "./shared/services/shopping-cart.service";
import { APP_BASE_HREF } from "@angular/common";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        ShoppingCartService
      ]
    }).compileComponents();
  }));

  it("Componente app-root deberia crearse", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
