import { Component, Input, OnChanges } from '@angular/core';
import { IMyProduct } from '../shared/myProduct.model';


@Component({
  selector: 'myProduct-thumbail',
  template: `
  <div class="row" *ngFor="let visibleProduct of visibleProducts">
    <div class="row">
        <div class="col-sm-1">
          <input type="checkbox" id="produkt1" name="produkt1" value="Produkt1">
        </div>
        <div class="col-md-4 col-sm-1">
          {{visibleProduct?.name}}
        </div>
        <div class="col-sm-1">
          {{visibleProduct?.quantity}}
        </div>
        <div class="col-sm-1" >
          {{visibleProduct?.dateExp | date:'d-M-y'}}
        </div>
        <div class="col-sm-1">
          Dodaj 
        </div>
        <div class="col-sm-1">
          Pokaż przepisy 
        </div>
        <div class="col-sm-1">
          Usuń
        </div>
    </div>
  </div>
    `
})
export class ProductThumbailComponent implements OnChanges{
  @Input() products:IMyProduct[]

  @Input()
  filterBy: string
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

  filterProduct(filter: string){
    if(filter ==='all'){
      this.visibleProducts = this.products.slice(0)
    } else{
      this.visibleProducts = this.products.filter(products => {
        return products.productType.toLocaleLowerCase() === filter;
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
  if(s1.dateAdd.getTime() > s2.dateAdd.getTime()) return 1
  else if(s1.dateAdd.getTime() === s2.dateAdd.getTime()) return 0
  else return -1
}

function sortByDateExp(s1: IMyProduct, s2: IMyProduct){
  if(s1.dateExp.getTime() > s2.dateExp.getTime()) return 1
  else if(s1.dateExp.getTime() === s2.dateExp.getTime()) return 0
  else return -1
}