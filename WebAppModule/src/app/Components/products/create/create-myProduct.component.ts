import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../../../_services/product.service";
import { MatSnackBar } from "@angular/material/snack-bar";


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
  currentTimeInMilliseconds: number
  minDate: Date;


  constructor(private router: Router,
              private productService: ProductService,
              private _snackBar: MatSnackBar) {
    this.currentTimeInMilliseconds = Date.now();
    this.minDate = new Date(this.currentTimeInMilliseconds);
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.productName = new FormControl('', Validators.required)
    this.productQuantity = new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')])
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
          if (data != undefined) {
            this._snackBar.open("The product has been saved!", 'OK', {
              duration: 4000
            });
            this.router.navigate(['/MyProducts'])
            return
          }
          this._snackBar.open("A problem occured", 'OK', {
            duration: 4000
          });
        },
        error => {
          this._snackBar.open(error, 'OK', {
            duration: 4000
          });
        })
  }

  cancel() {
    this.router.navigate(['/MyProducts'])
  }
}
