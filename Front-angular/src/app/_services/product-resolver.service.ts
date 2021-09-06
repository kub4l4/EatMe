import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ProductService } from "./product.service";
import { IMyProduct } from "../_models/myProduct.model";

@Injectable()
export class ProductResolverService implements Resolve<IMyProduct> {

  constructor(private productService : ProductService,
              private route : ActivatedRoute,
              private router : Router) {
  }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return this.productService.getProductById(route.paramMap.get('id')).pipe(map(productById => productById))
  }

}
