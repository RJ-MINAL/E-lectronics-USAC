import { ProductCardComponent } from "./product-card.component";
import { ShoppingCartService } from "../services/shopping-cart.service";

describe("ProductCardComponent", () => {
  let servicio: ShoppingCartService;
  let componente: ProductCardComponent;

  beforeEach(() => {
    servicio = new ShoppingCartService(null);
    componente = new ProductCardComponent(servicio);
  });


  //PRODUCTO CARD COMPOMENT -- AGREGANDO PRUEBAS UNITARIAS!

  it("Componente product-card deberia ser creado", () => {
    expect(servicio).toBeTruthy();
    expect(componente).toBeTruthy();
  });

  it("Deberia llamar al servicio ShoppingCart", () => {
    let spy = spyOn(servicio,"addToCart").and.callFake(() => {
      return true;
    });
  
    expect(spy).toHaveBeenCalled();
  });
});