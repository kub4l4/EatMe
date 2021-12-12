import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../../../_models/Product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../_services/product.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-search-product-item',
  templateUrl: './search-product-item.component.html',
  styleUrls: ['./search-product-item.component.css'],
})
export class SearchProductItemComponent implements OnInit {
  public newProductForm!: FormGroup;
  public name!: FormControl
  public quantity!: FormControl
  public expireDate!: FormControl

  selectedProduct: IProduct

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedProduct = this.route.snapshot.data['productById']
  }


}
