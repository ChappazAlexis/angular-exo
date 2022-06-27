import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.css']
})
export class SingleProductViewComponent implements OnInit {

  product: any;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.product = this.productsService.getElementById(+id);
  }

}
 