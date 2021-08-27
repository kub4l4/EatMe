import { Injectable } from "@angular/core"
import { Observable, Subject } from "rxjs";
import { IMyProduct } from "./myProduct.model";

@Injectable()
export class ProductService{
    getProducts():Observable<IMyProduct[]>{
      let subject = new Subject<IMyProduct[]>()
      setTimeout(() => {subject.next(PRODUCTS); subject.complete();}, 100)
        return subject
    }
    getProduct(id:number) {
        return PRODUCTS.find(product => product.id === id)
    }

    saveEvent(myProduct: any){
      myProduct.id = 999
      console.log(myProduct)
      PRODUCTS.push(myProduct)
    }
}

const PRODUCTS:IMyProduct[] = [
  {
    id: 1,
    name: 'Milk',
    productType: 'type1',
    quantity: 2,
    dateExp: new Date('12/21/2021'),
    dateAdd: new Date('10/30/2021')
  },
  {
      id: 2,
      name: 'Banana',
      productType: 'type1',
      quantity: 5,
      dateExp: new Date('12/15/2021'),
      dateAdd: new Date('11/11/2021')
    },
    {
      id: 3,
      name: 'Chocolate Cookies',
      productType: 'type2',
      quantity: 5,
      dateExp: new Date('08/16/2022'),
      dateAdd: new Date('12/22/2021')
    }
  ]