import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { map } from "rxjs/operators";
import { ProductService } from "./product.service";

@Injectable()
export class ProductsResolverService implements Resolve<any> {

  constructor(private productService : ProductService) {

  }

  resolve() {
    return this.productService.getProducts1().pipe(map(products => products))
  }

}
