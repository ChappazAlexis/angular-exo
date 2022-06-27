import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<any>;

  constructor() {

    this.products = [
      new Product(0, 'Javel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.', 'en stock'),
      new Product(1, 'Lingettes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.', 'pas en stock')
    ];

  }

  /**
   * Method for switch the status of all the products
   * @param newStatus The new status to set
   */
  switchProductsStatus(newStatus: string) {
    this.products.map((product) => {
      product.status = newStatus;
    });
  }

  /**
   * Method for switch the status of one products
   * @param i The index of the product to update
   * @param newStatus The new status to set
   */
  switchProductStatus(i: number, newStatus: string) {
    this.products[i].status = newStatus;
  }

  /**
   * Method for search an element in the array by his id
   * @param id The id of the product searched
   */
  getElementById(id: number) {
    const product = this.products.find(
      (s) => {
        return s.id === id;
      }
    );
    return product;
  }

  /**
   * Method for add a new product
   * @param name The name of the product
   * @param description The description of the product
   * @param status The status of the product
   */
  addProduct(name: string, description: string, status: string) {
    // Necessary, if we delete all the products, the add product throw an error because the array length is null
    let id = 0;
    if (this.products.length > 0) {
      id = this.products[this.products.length - 1].id + 1;
    }

    const newProduct = new Product(id, name, description, status);
    this.products.push(newProduct);
  }

  /**
   * Generic method for loop through each product
   * @param attrComp The attr search to compare
   * @param valComp The val to compare
   * @param cb The callback to call when the condition is true
   */
  _loopProducts(attrComp, valComp, cb) {

    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i][attrComp] === valComp) {
        cb(i);
      }
    }

  }

  /**
   * Method for edit an existing product from the array
   * @param id The id of the product
   * @param name The name of the product
   * @param description The description of the product
   * @param status The status of the product
   */
  editProduct(id: number, name: string, description: string, status: string) {

    const cb = (i) => {
      this.products[i].name = name;
      this.products[i].description = description;
      this.products[i].status = status;
      return;
    };

    this._loopProducts('id', id, cb);

  }

  /**
   * Method for delete a product by his id
   * @param id The id of the product to delete
   */
  deleteProduct(id: number) {

    const cb = (i) => {
      return this.products.splice(i, 1);
    };

    this._loopProducts('id', id, cb);

  }
}
