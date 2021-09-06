import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { IMyProduct } from "../../../_models/myProduct.model";
import { ProductService } from "../../../_services/product.service";
import {CategoryService} from "../../../_services/category.service";
import {ICategory} from "../../../_models/category.model";

@Component({
  templateUrl : './create-myProduct.component.html',
  styleUrls : ['./create-myProduct.component.css']
})
export class CreateMyProduct implements OnInit {
  public newMyProductForm! : FormGroup;
  public name! : FormControl
  public categoryId! : FormControl
  public quantity! : FormControl
  public expireDate! : FormControl

  categories: ICategory[]

  constructor(private router : Router,
              private productService : ProductService,
              private categoryService: CategoryService,
              private route : ActivatedRoute,) {
  }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories']

    this.name = new FormControl('', Validators.required)
    this.categoryId = new FormControl('', Validators.required)
    this.quantity = new FormControl('', Validators.required)
    this.expireDate = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newMyProductForm = new FormGroup({
      name : this.name,
      categoryId : this.categoryId,
      quantity : this.quantity,
      expireDate : this.expireDate
    })

  }


  saveSession(formValues : { name : string, categoryId : number, quantity : number, expireDate : string }) {
    this.productService.saveProduct(formValues.name, +formValues.categoryId, formValues.quantity, formValues.expireDate)
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
