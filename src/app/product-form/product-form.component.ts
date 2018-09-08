import { Component } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product = {
    title: 'Titulo',
    price: 0,
    category: '',
    imageUrl:
      'https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'
  };

  constructor() {}
}
