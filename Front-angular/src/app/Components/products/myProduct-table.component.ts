import { Component, Input, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IMyProduct } from '../../_models/myProduct.model';


@Component({
  selector: 'myProduct-table',
  templateUrl: './myProduct-table.component.html'
})
export class MyProductTableComponent implements OnChanges{
  @Input() products:IMyProduct[]

  @Input()
  filterBy: number
  @Input()
  sortBy!: string

  visibleProducts: IMyProduct [] = []



  constructor() { }



  ngOnChanges(){
    if(this.products){
      this.filterProduct(this.filterBy)
      if(this.sortBy === 'name'){
        this.visibleProducts.sort(sortByNameAsc)
      }
      else if(this.sortBy === 'dateAdd'){
        this.visibleProducts.sort(sortByDateAdd)
      }
      else{
        this.visibleProducts.sort(sortByDateExp)
      }
    }
  }

  filterProduct(filter: number){
    if(filter === 0){
      this.visibleProducts = this.products.slice(0)
    } else{
      this.visibleProducts = this.products.filter(products => {
        return products.categoryId === filter;
      })
    }
  }
}

function sortByNameAsc(s1: IMyProduct, s2: IMyProduct){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}


function sortByDateAdd(s1: IMyProduct, s2: IMyProduct){
  s1
  if(s1.createdAt.getTime() > s2.createdAt.getTime()) return 1
  else if(s1.createdAt.getTime() === s2.createdAt.getTime()) return 0
  else return -1
}

function sortByDateExp(s1: IMyProduct, s2: IMyProduct){
  if(s1.expireDate.getTime() > s2.expireDate.getTime()) return 1
  else if(s1.expireDate.getTime() === s2.expireDate.getTime()) return 0
  else return -1
}
