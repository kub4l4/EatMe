import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../_services/product.service";
import { IProduct } from "../../../_models/Product.model";
import { MatSnackBar } from "@angular/material/snack-bar";

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
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.product = this.route.snapshot.data['userProductById']
    this.formInit()
  }

  formInit() {
    this.productName = new FormControl(this.product.productName, Validators.required)
    this.amountLeft = new FormControl(this.product.amountLeft, [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')])
    this.expireDate = new FormControl(this.product.expireDate, [Validators.required, Validators.maxLength(400)])

    this.editMyProductForm = new FormGroup({
      productName: this.productName,
      amountLeft: this.amountLeft,
      expireDate: this.expireDate
    })
  }


  updateSession(formValues: { productName: string, categoryId: number, amountLeft: number, expireDate: string }) {
    let expireDate = new Date(formValues.expireDate)
    this.productService.editProduct(this.product.idProduct, formValues.productName, formValues.amountLeft, expireDate.getTime())
      .subscribe(
        data => {
          this._snackBar.open("The product has been updated!", 'OK', {
            duration: 4000
          });
          this.router.navigate(['/MyProducts'])
          return
        },
        error => {
          this._snackBar.open(error, 'OK', {
            duration: 4000
          });
        }
      )
  }

  cancel() {
    this.router.navigate(['/MyProducts'])
  }
}
