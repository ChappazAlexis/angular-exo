import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  nextStatus = 'en stock';

  products: Array<object>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products;
  }

  /**
   * Method called when user click on the switch button
   */
  onSwitchAllStatus() {
    this.productsService.switchProductsStatus(this.nextStatus);

    if (this.nextStatus === 'en stock') {
      this.nextStatus = 'pas en stock';
    } else {
      this.nextStatus = 'en stock';
    }
  }
}
 