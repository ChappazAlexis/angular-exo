import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../services/products/products.service';

@Component({
  selector: 'app-new-product-view',
  templateUrl: './new-product-view.component.html',
  styleUrls: ['./new-product-view.component.css']
})
export class NewProductViewComponent implements OnInit {

  newProductForm: FormGroup;

  constructor(private productService: ProductsService, private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }
 
  /**
   * Method for initialize all the controls for the new product form
   */
  initForm() {
    this.newProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['en stock', Validators.required]
    });
  }

  /**
   * Method when user submit auth form
   */
  onSubmitNewProduct() {
    const formValue = this.newProductForm.value;

    this.productService.addProduct(
      formValue.name,
      formValue.description,
      formValue.status
    );

    this.router.navigate(['products']);
  }

}
