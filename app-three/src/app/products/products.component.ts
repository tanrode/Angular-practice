import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log("Error occured"),
    });
  }

}
