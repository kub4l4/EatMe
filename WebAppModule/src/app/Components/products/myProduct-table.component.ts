import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from "../../_services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IProductTable } from "../../_models/product-table.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'myProduct-table',
  templateUrl: './myProduct-table.component.html',
  styleUrls: ['./myProduct-table.component.css']
})
export class MyProductTableComponent implements OnInit {
  @Input() products: IProductTable[]
  filterBy: number = 0
  sortBy: string = 'dateExp'
  visibleProducts: IProductTable[] = []
  editQuantityShown: boolean[] = []
  currentTimeInMilliseconds: number

  listOfColumns: any[] = [
    {
      name: '',
    },
    {
      name: 'Resource name',
      width: '60%',
      sortOrder: 'ascend',
      sortFn: true
    },
    {
      name: 'Type',
      width: '10%',
      sortFn: true,
      filterFn: true,
    },
    {
      name: 'Expire Date',
      width: '15%',
      sortFn: true,
      filterFn: true,
    },
    {
      name: 'Edit',
      width: '7%',

    },
    {
      name: 'Archive',
      width: '8%',
    },
  ];

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar) {
    this.currentTimeInMilliseconds = Date.now();
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data['userProducts']
    this.changeSort();
  }

  toggleHide(idProduct: number) {
    this.editQuantityShown[idProduct] = false;
  }

  toggleShow(idProduct: number) {
    this.editQuantityShown[idProduct] = true
  }

  changeFilter(newValue: number) {
    this.filterBy = +newValue
    if (this.products) {
      this.filterProduct(this.filterBy)
    }
  }

  changeSort(newValue: string = 'name') {
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
    //TODO Change this to snackBar
    if (!confirm("Are you sure to archive " + productName + "?")) {

      this._snackBar.open(`Operation archive canceled`, 'OK', {
        duration: 4000
      });
      return;
    }
    this.productService.archiveProduct(id)
      .subscribe(
        data => {
          this.products.forEach((value, index) => {
            if (value.idProduct == data) this.products.splice(index, 1);
          });
          this._snackBar.open(`The product ${productName} has been archived!`, 'OK', {
            duration: 4000
          });
          this.changeSort();
        },
        error => {
          this._snackBar.open(error, 'OK', {
            duration: 4000
          });
        }
      )
  }

  updateProduct(idProduct: number, amountChanged: number, amountLeft: number) {
    let amountNew = amountLeft - amountChanged;
    if (amountNew < 0) {
      this._snackBar.open(`The number should be bigger then 0. Your new amount would be ${amountNew}`, 'OK');
    }
    this.productService.editQuantity(idProduct, amountNew)
      .subscribe(
        data => {
          this._snackBar.open(`Product saved. The new amount is ${amountNew}`, 'OK', {
            duration: 4000
          });
          this.products = this.route.snapshot.data['userProducts']
          this.changeSort();

        },
        error => {
          this._snackBar.open(error, 'OK', {
            duration: 4000
          });
        }
      )
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
