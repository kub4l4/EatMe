import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../_services/product.service";
import { IProduct } from "../../../_models/Product.model";

@Component({
  templateUrl: './edit-myProduct.component.html',
  styleUrls: ['./edit-myProduct.component.css']
})
export class EditMyProductComponent implements OnInit {
  public editMyProductForm!: FormGroup;
  public productName!: FormControl
  public amountLeft!: FormControl
  public expireDate!: FormControl

  product: IProduct

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.product = this.route.snapshot.data['productById']
    this.formInit()
  }

  formInit() {
    this.productName = new FormControl(this.product.productName, Validators.required)
    this.amountLeft = new FormControl(this.product.amountLeft, Validators.required)
    this.expireDate = new FormControl(this.product.expireDate, [Validators.required, Validators.maxLength(400)])

    this.editMyProductForm = new FormGroup({
      productName: this.productName,
      amountLeft: this.amountLeft,
      expireDate: this.expireDate
    })
  }


  updateSession(formValues: { productName: string, categoryId: number, amountLeft: number, expireDate: string }
  ) {
    let expireDate = new Date(formValues.expireDate)
    this.productService.updateProduct(this.product.idProduct, formValues.productName, formValues.amountLeft, expireDate.getTime())
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
