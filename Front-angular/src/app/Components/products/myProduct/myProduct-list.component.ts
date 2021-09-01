import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMyProduct } from '../shared/myProduct.model';
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
  filterBy: string = "all"
  sortBy: string = 'dateExp'

  constructor(private productService: ProductService, private route:ActivatedRoute) {
    // this.products=this.productService.getProducts() chyba usunąć
   }
  

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products']
  }

}
