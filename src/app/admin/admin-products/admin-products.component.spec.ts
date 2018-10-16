import { Product } from '../../shared/models/product.model';
import { AdminProductsComponent } from './admin-products.component';
import { ProductService } from '../../shared/services/product.service';
import { Observable } from 'rxjs/Observable';

describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let service: ProductService;
  const product: Product = {
    $key: '1',
    title: 'titulo',
    price: 1,
    category: 'featured',
    imageUrl: 'https://imageURL.com'
  };

  beforeEach(() => {
    service = new ProductService(null);
    component = new AdminProductsComponent(service);
    component.products = [product];
  });

  it('Deberia ser creado el componente', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('Deberia obtener el listado de productos de ProductService y llamar al metodo initializeTable', () => {
    const spyService = spyOn(service, 'getAll').and.returnValue(
      Observable.from([product])
    );
    const spyTable = spyOn(component, 'initializeTable');

    component.ngOnInit();

    expect(spyService).toHaveBeenCalled();
    expect(component.subscription).not.toBeNull();
    expect(component.products).toBeTruthy();
    expect(spyTable).toHaveBeenCalled();
  });

  it('Deberia inicializar la tabla de la pagina', () => {
    component.initializeTable([product, product]);
    expect(component.tableResource).toBeTruthy();
  });

  it('El metodo filtrado deberia asignar un nuevo valor al objeto filteredProducts y debe llamar al metodo para re-inicializar la tabla', () => {
    const spyTable = spyOn(component, 'initializeTable');

    component.filter('new');
    expect(spyTable).toHaveBeenCalled();
  });

  it('El metodo filtrado NO deberia asignar un nuevo valor al objeto filteredProducts y debe llamar al metodo para re-inicializar la tabla', () => {
    const spyTable = spyOn(component, 'initializeTable');

    component.filter(null);
    expect(spyTable).toHaveBeenCalled();
  });

  it('El metodo reload deberia recargar los items de la tabla', () => {
    component.initializeTable([product]);
    const spyTableResource = spyOn(
      component.tableResource,
      'query'
    ).and.callFake(() => {
      return new Promise((res, rej) => {
        return res;
      });
    });

    component.reloadItems(null);
    expect(spyTableResource).toHaveBeenCalled();
  });

  it('El metodo reload NO deberia recargar los items de la tabla', () => {
    component.initializeTable([product]);
    const spyTableResource = spyOn(component.tableResource, 'query');

    component.tableResource = null;
    component.reloadItems(null);
    expect(spyTableResource).not.toHaveBeenCalled();
  });

  it('Deberia desubscribirse de subscripcion al momento de eliminar el componente', () => {
    spyOn(service, 'getAll').and.returnValue(Observable.from([product]));
    spyOn(component, 'initializeTable');

    component.ngOnInit();

    const spyUnsubscribe = spyOn(
      component.subscription,
      'unsubscribe'
    ).and.callFake(() => null);

    component.ngOnDestroy();
    expect(spyUnsubscribe).toHaveBeenCalled();
  });
});
