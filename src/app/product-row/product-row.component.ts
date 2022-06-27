import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../services/products/products.service';

@Component({
  selector: '[app-product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() productId;
  @Input() productName;
  @Input() productStatus;
  @Input() index;

  nextStatus: string;
  editRoute: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.defineNextStatus(this.productStatus);

    this.editRoute = '/edit/product/' + this.productId;
  }
 
  /**
   * Method for define the next status for the button
   * @param comparator The element to compare for select the next status
   */
  defineNextStatus(comparator: string) {
    if (comparator === 'en stock') {
      this.nextStatus = 'pas en stock';
    } else {
      this.nextStatus = 'en stock';
    }
  }

  /**
   * Method for update the status of the product
   * @param i The index of the product
   */
  onSwitchStatus(i: number) {
    this.productsService.switchProductStatus(i, this.nextStatus);

    this.defineNextStatus(this.nextStatus);
  }

  /**
   * Method called when the user click on the delete button
   */
  onDeleteProduct() {
    this.productsService.deleteProduct(this.productId);
  }

}
