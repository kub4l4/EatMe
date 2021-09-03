import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IMyProduct } from "../../../_models/myProduct.model";
import { ProductService } from "../../../_services/product.service";

@Component({
    templateUrl: './create-myProduct.component.html',
    styles: [`
    em{float: right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :ms-input-placeholder { color: #999;}
  `]

})
export class CreateMyProduct implements OnInit{
    public newMyProductForm!: FormGroup;
    public name!: FormControl
    public categoryId!: FormControl
    public quantity!: FormControl
    public dateAdd!: FormControl
    public dateExp!: FormControl

    constructor(private router:Router, private productService:ProductService){

    }

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.categoryId = new FormControl('', Validators.required)
        this.quantity = new FormControl('', Validators.required)
        this.dateExp = new FormControl('', [Validators.required, Validators.maxLength(400)])

        this.newMyProductForm = new FormGroup({
            name: this.name,
            categoryId: this.categoryId,
            quantity: this.quantity,
            dateExp: this.dateExp
        })
    }



    saveSession(formValues: { name: any; categoryId: any; quantity: string | number; dateExp: any; }){
         //let session:IMyProduct ={
         //    id: 1,
         //    name: formValues.name,
         //    categoryId: formValues.categoryId,
         //    quantity: +formValues.quantity,
         //    dateAdd: new Date('21/11/2021'),
         //    dateExp: formValues.dateExp,
         //}
        this.productService.saveEvent(formValues)
        this.router.navigate(['/MyProducts'])

    }

    cancel(){
        this.router.navigate(['/MyProducts'])
    }
}
