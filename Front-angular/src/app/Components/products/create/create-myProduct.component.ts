import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../_services/product.service";


@Component({
  templateUrl: './create-myProduct.component.html',
  styleUrls: ['./create-myProduct.component.css']
})
export class CreateMyProduct implements OnInit {
  public newMyProductForm!: FormGroup;
  public name!: FormControl
  public quantity!: FormControl
  public expireDate!: FormControl


  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.quantity = new FormControl('', Validators.required)
    this.expireDate = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newMyProductForm = new FormGroup({
      name: this.name,
      quantity: this.quantity,
      expireDate: this.expireDate
    })

  }


  saveSession(formValues: { name: string, quantity: number, expireDate: string }) {
    let expireDate = new Date(formValues.expireDate)
    this.productService.saveProduct(formValues.name, formValues.quantity, expireDate.getTime())
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
