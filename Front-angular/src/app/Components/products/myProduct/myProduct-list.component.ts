import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { IMyProduct } from '../shared/myProduct.model';
import { DatePipe, NgForOf } from '@angular/common';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './myProduct-list.component.html',
  styles: [`
  h1{	font-size: 36px;	font-weight: 400;	color: #F8751E; margin: 20px;}
  .bg-leftbar {	background-color: #F8751E !important; }
  `]
})
export class ProductListComponent implements OnInit {
  products: IMyProduct[]
  product: IMyProduct

  productsMess: any[]

  filterBy: number = 0
  sortBy: string = 'dateExp'

  content?: string;


  old: string;
  new: Date
  constructor(private productService: ProductService, private route:ActivatedRoute, private userService: UserService) {
   }
  


  ngOnInit(): void {
    this.retriveProducts()


  }

  retriveProducts(): void{
    this.productService.getProducts1().subscribe(
      data => {
        this.productsMess = data;
        for (this.product of data){
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




