import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../services/products/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  editProductForm: FormGroup;

  product: Product;

  constructor(private productService: ProductsService, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.product = this.productService.getElementById(+id);

    this.initForm();
  }

  /**
   * Method for initialize all the controls for the new product form
   */
  initForm() {
    this.editProductForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      status: [this.product.status, Validators.required]
    });
  }

  /**
   * Method when user submit auth form
   */
  onSubmitEditProduct() {
    const formValue = this.editProductForm.value;

    this.productService.editProduct(
      this.product.id,
      formValue.name,
      formValue.description,
      formValue.status
    );

    this.router.navigate(['products']);
  }

}
