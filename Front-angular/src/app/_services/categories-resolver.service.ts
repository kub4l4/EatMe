import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { map } from "rxjs/operators";
import { ProductService } from "./product.service";
import {CategoryService} from "./category.service";

@Injectable()
export class CategoriesResolverService implements Resolve<any> {

  constructor(private categoryService : CategoryService) {

  }

  resolve() {
    return this.categoryService.getCategories().pipe(map(categories => categories))
  }

}
