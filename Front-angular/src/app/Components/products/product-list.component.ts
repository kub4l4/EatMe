import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [`
  .bg-leftbar {	background-color: #F8751E !important; }
  `]
})
export class ProductListComponent implements OnInit {
  products:any[]


  constructor(private productService: ProductService, private route:ActivatedRoute) {
    this.products=this.productService.getProducts()
   }
  

  ngOnInit(): void {
    //this.products=this.route.snapshot.data['products']
  }

}
