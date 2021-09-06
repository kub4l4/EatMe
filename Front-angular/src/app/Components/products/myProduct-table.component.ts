import { Component, Input, OnChanges } from '@angular/core';

import { IMyProduct } from '../../_models/myProduct.model';

import { ProductService } from "../../_services/product.service";
import { Router } from "@angular/router";
import { ICategory } from "../../_models/category.model";


@Component({
  selector : 'myProduct-table',
  templateUrl : './myProduct-table.component.html',
  styleUrls : ['./myProduct-table.component.css']
})
export class MyProductTableComponent implements OnChanges {
  @Input()
  products : IMyProduct[]

  @Input()
  categories: ICategory[]

  filterBy : number = 0
  sortBy : string = 'dateExp'

  visibleProducts : IMyProduct[] = []


  constructor(private router : Router, private productService : ProductService) {
  }

  changeFilter(newValue:number){
    console.log(newValue);
    this.filterBy=+newValue
    if (this.products) {
      this.filterProduct(this.filterBy)
      }
  }

  changeSort(newValue:string){
    console.log(newValue);
    this.sortBy=newValue
    if (this.products) {
      this.filterProduct(this.filterBy)
      if (this.sortBy === 'name') {
        this.visibleProducts.sort(sortByNameAsc)
      } else if (this.sortBy === 'dateAdd') {
        this.visibleProducts.sort(sortByDateAdd)
      } else {
        this.visibleProducts.sort(sortByDateExp)
      }
    }
  }

  ngOnChanges() {
    if (this.products) {
      this.filterProduct(this.filterBy)
      if (this.sortBy === 'name') {
        this.visibleProducts.sort(sortByNameAsc)
      } else if (this.sortBy === 'dateAdd') {
        this.visibleProducts.sort(sortByDateAdd)
      } else {
        this.visibleProducts.sort(sortByDateExp)
      }
    }
  }

  filterProduct(filter : number) {
    if (filter === 0) {
      console.log("filterProduct", filter)
      this.visibleProducts = this.products.slice(0)
    } else {
      console.log("filterProduct", filter)
      this.visibleProducts = this.products.filter(products => {
        return products.categoryId === filter;
      })
    }
  }

  delete(id : any) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log("Usunięte id:", id, data)
        },
        error => {
          console.log(error);
        })
    window.location.reload()
    //TODO Informacja o usunięciu
  }

}

function sortByNameAsc(s1 : IMyProduct, s2 : IMyProduct) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}


function sortByDateAdd(s1 : IMyProduct, s2 : IMyProduct) {
  if (s1.createdAt.getTime() > s2.createdAt.getTime()) return 1
  else if (s1.createdAt.getTime() === s2.createdAt.getTime()) return 0
  else return -1
}

function sortByDateExp(s1 : IMyProduct, s2 : IMyProduct) {
  if (s1.expireDate.getTime() > s2.expireDate.getTime()) return 1
  else if (s1.expireDate.getTime() === s2.expireDate.getTime()) return 0
  else return -1
}
