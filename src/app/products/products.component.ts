import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/services/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }
}
