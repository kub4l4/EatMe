import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../../../_models/Product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../_services/product.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-search-product-item',
  templateUrl: './search-result-product.component.html',
  styleUrls: ['./search-result-product.component.css'],
})
export class SearchResultProductComponent implements OnInit {
  public newProductForm!: FormGroup;
  public name!: FormControl
  public quantity!: FormControl
  public expireDate!: FormControl

  selectedProduct: IProduct

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedProduct = this.route.snapshot.data['productById']
    this.formInit()
  }

  formInit() {
    this.name = new FormControl(this.selectedProduct.productName, Validators.required)
    this.quantity = new FormControl(this.selectedProduct.productQuantity, Validators.required)
    this.expireDate = new FormControl(this.selectedProduct.expireDate, [Validators.required, Validators.maxLength(400)])

    this.newProductForm = new FormGroup({
      name: this.name,
      quantity: this.quantity,
      expireDate: this.expireDate
    })
  }

  saveSession(formValues: { name: string, quantity: number, expireDate: string }) {
    let expireDate = new Date(formValues.expireDate)
    this.selectedProduct.productName = formValues.name;
    this.selectedProduct.productQuantity = formValues.quantity;
    this.selectedProduct.expireDate = expireDate.getTime();

    this.productService.saveProduct(this.selectedProduct)
      .subscribe(
        data => {
          console.log("DANE:", data)
        },
        error => {
          console.log(error);
        })
    this.router.navigate(['/MyProducts'])
  }

  cancel() {
    this.router.navigate(['/MyProducts/search'])
  }

}
