import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IMyProduct } from "../../../_models/myProduct.model";
import { ProductService } from "../../../_services/product.service";

@Component({
  templateUrl : './edit-myProduct.component.html',
  styleUrls : ['./edit-myProduct.component.css']
})
export class EditMyProductComponent implements OnInit {
  public editMyProductForm! : FormGroup;
  public name! : FormControl
  public categoryId! : FormControl
  public quantity! : FormControl
  public expireDate! : FormControl

  product : IMyProduct

  constructor(private router : Router,
              private productService : ProductService,
              private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.product = this.route.snapshot.data['productById']
    console.log(this.product)
    this.form()
  }

  form() {
    this.name = new FormControl(this.product.name, Validators.required)
    this.categoryId = new FormControl(this.product.categoryId, Validators.required)
    this.quantity = new FormControl(this.product.quantity, Validators.required)
    this.expireDate = new FormControl(this.product.expireDate, [Validators.required, Validators.maxLength(400)])

    this.editMyProductForm = new FormGroup({
      name : this.name,
      categoryId : this.categoryId,
      quantity : this.quantity,
      expireDate : this.expireDate
    })
  }


  updateSession(formValues : { name : string, categoryId : number, quantity : number, expireDate : string }
  ) {
    this.productService.updateProduct(this.product.productId, formValues.name, +formValues.categoryId, formValues.quantity, formValues.expireDate)
      .subscribe(
        data => {
          console.log("DANE:", data)
        },
        error => {
          console.log(error);
        })
    //TODO zrobić czekanie na dodanie produktu, zanim przejdzie na add products
    this.router.navigate(['/MyProducts'])
  }

  cancel() {
    this.router.navigate(['/MyProducts'])
  }
}
