import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ProductService } from "./product.service";
import { IProduct } from "../_models/Product.model";

@Injectable()
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getProductById(route.paramMap.get('id')).pipe(map(productById => productById))
  }

}
