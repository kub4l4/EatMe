import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { IMyProduct } from '../../_models/myProduct.model';
import { DatePipe, NgForOf } from '@angular/common';
import { ProductService } from '../../_services/product.service';

@Component({
  selector : 'app-product-list',
  templateUrl : './myProduct.component.html',
  styles : [`
    h1 {
      font-size: 36px;
      font-weight: 400;
      color: #F8751E;
      margin: 20px;
    }

    .bg-leftbar {
      background-color: #F8751E !important;
    }
  `]
})
export class MyProductComponent implements OnInit {
  products : IMyProduct[]
  product : IMyProduct
  productsMess : any[]
  filterBy : number = 0
  sortBy : string = 'dateExp'
  test : any[]

  constructor(private productService : ProductService, private route : ActivatedRoute, private userService : UserService) {
  }


  ngOnInit() : void {
    this.retrieveProducts()
    this.test = this.route.snapshot.data['products']
    console.log(this.test)
  }

  retrieveProducts() : void {
    this.productService.getProducts1().subscribe(
      data => {
        this.productsMess = data;
        for (this.product of data) {
          this.product.createdAt = new Date(this.product.createdAt)
          this.product.expireDate = new Date(this.product.expireDate)
        }
        this.products = this.productsMess
      },
      error => {
        console.log(error);
      });
  }
}




