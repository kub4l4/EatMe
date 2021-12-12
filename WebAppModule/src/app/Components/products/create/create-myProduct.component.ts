import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../../../_services/product.service";


@Component({
  templateUrl: './create-myProduct.component.html',
  styleUrls: ['./create-myProduct.component.css']
})
export class CreateMyProduct implements OnInit {
  public newMyProductForm!: FormGroup;
  public productName!: FormControl
  public productQuantity!: FormControl
  public productSizeType!: FormControl
  public expireDate!: FormControl


  constructor(private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.productName = new FormControl('', Validators.required)
    this.productQuantity = new FormControl('', Validators.required)
    this.productSizeType = new FormControl('', Validators.required)
    this.expireDate = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newMyProductForm = new FormGroup({
      productName: this.productName,
      productQuantity: this.productQuantity,
      productSizeType: this.productSizeType,
      expireDate: this.expireDate
    })
  }

  saveSession(formValues: { productName: string, productQuantity: number, productSizeType: string, expireDate: string }) {
    let expireDate = new Date(formValues.expireDate)
    this.productService.saveNewProduct(formValues.productName, formValues.productQuantity, formValues.productSizeType, expireDate.getTime())
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
    this.router.navigate(['/MyProducts'])
  }
}
