import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from "../../_services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IProductTable } from "../../_models/product-table.model";

@Component({
  selector: 'myProduct-table',
  templateUrl: './myProduct-table.component.html',
  styleUrls: ['./myProduct-table.component.css']
})
export class MyProductTableComponent implements OnInit {
  @Input()
  products: IProductTable[]
  filterBy: number = 0
  sortBy: string = 'dateExp'
  visibleProducts: IProductTable[] = []
  visibleProduct: IProductTable
  editMenuShown: boolean = false;
  isShown: boolean[] = []
  currentTimeInMilliseconds: number

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {
    this.currentTimeInMilliseconds=Date.now();
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data['userProducts']
    console.log(this.products)
    this.changeSort();
  }

  toggleShow(idProduct: number) {
    console.log("Pojawiam sie")
    console.log(idProduct)
    this.isShown[idProduct] = true
  }

  toggleHide(idProduct: number) {
    console.log("Znikam")
    console.log(idProduct)
    this.isShown[idProduct] = false
  }

  changeFilter(newValue: number) {
    console.log(newValue);
    this.filterBy = +newValue
    if (this.products) {
      this.filterProduct(this.filterBy)
    }
  }

  changeSort(newValue: string = 'name') {
    console.log(newValue);
    this.sortBy = newValue
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

  filterProduct(filter: number) {
    if (filter === 0) {
      console.log("filterProduct", filter)
      this.visibleProducts = this.products.slice(0)
    } else {
      console.log("filterProduct", this.products)
      this.visibleProducts = this.products.filter(products => {
        //return products.categoryId === filter;
      })
    }
  }

  archive(id: any, productName: String) {
    if (!confirm("Are you sure to archive " + productName + "?")) {
      console.log("Ok!");
      return;
    }
    this.productService.archiveProduct(id)
      .subscribe(
        data => {
          this.products.forEach((value, index) => {
            if (value.idProduct == data) this.products.splice(index, 1);
          });
          this.changeSort();
          //TODO add popup about proper archive
        },
        error => {
          console.log(error);
          //TODO add popup about error
        })
  }

  updateProduct(idProduct: number, amountChanged: number, amountLeft: number) {
    let amountNew = amountLeft - amountChanged;
    if (amountNew < 0) {
      /*TODO przypominajka!*/
      console.log("HALO! ZA DUZO!")
    }
    this.productService.editQuantity(idProduct, amountNew)
      .subscribe(
        data => {
          console.log("DANE:", data)
        },
        error => {
          console.log(error);
        })
    this.products = this.route.snapshot.data['userProducts']
    this.changeSort();
  }


}


function sortByNameAsc(s1: IProductTable, s2: IProductTable) {
  if (s1.productName > s2.productName) return 1
  else if (s1.productName === s2.productName) return 0
  else return -1
}


function sortByDateAdd(s1: IProductTable, s2: IProductTable) {
  if (s1.createdAt > s2.createdAt) return 1
  else if (s1.createdAt === s2.createdAt) return 0
  else return -1
}

function sortByDateExp(s1: IProductTable, s2: IProductTable) {
  if (s1.expireDate > s2.expireDate) return 1
  else if (s1.expireDate === s2.expireDate) return 0
  else return -1
}
