import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { ProductService } from '../../_services/product.service';
import { IProduct } from "../../_models/Product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './myProduct.component.html',
  styleUrls: ['./myProduct.component.css']
})
export class MyProductComponent implements OnInit {
  products: IProduct[]
  product: IProduct

  constructor(private productService: ProductService, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products']
    this.dateReplacer()
  }

  dateReplacer() {
    for (this.product of this.products) {
      this.product.createdAt = (this.product.createdAt)
      this.product.expireDate = (this.product.expireDate)
    }
  }

}




