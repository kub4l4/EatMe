import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ProductService } from "./product.service";
import { IProduct } from "../_models/Product.model";

@Injectable()
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getUserProductById(route.paramMap.get('id')).pipe(map(userProductById => userProductById))
  }

}
