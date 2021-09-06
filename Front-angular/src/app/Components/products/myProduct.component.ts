import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { IMyProduct } from '../../_models/myProduct.model';
import { DatePipe, NgForOf } from '@angular/common';
import { ProductService } from '../../_services/product.service';
import { ICategory } from "../../_models/category.model";

@Component({
  selector : 'app-product-list',
  templateUrl : './myProduct.component.html',
  styleUrls : ['./myProduct.component.css']
})
export class MyProductComponent implements OnInit {
  products : IMyProduct[]
  product: IMyProduct
  categories : ICategory[]

  constructor(private productService : ProductService, private route : ActivatedRoute, private userService : UserService) {
  }

  ngOnInit() : void {
    this.categories = this.route.snapshot.data['categories']
    this.products = this.route.snapshot.data['products']
    this.dateReplacer()
  }

  dateReplacer(){
    for (this.product of this.products) {
      this.product.createdAt = new Date(this.product.createdAt)
      this.product.expireDate = new Date(this.product.expireDate)
    }
  }

}




