import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable()
export class ProductService{
    getProducts(){
      return PRODUCTS
      //let subject = new Subject()
      //setTimeout(() => {subject.next(PRODUCTS); subject.complete();}, 100)
      //  return subject
    }
    getProduct(id:number){
        return PRODUCTS.find(product => product.id === id)
    }

    saveEvent(myProduct: any){
      myProduct.id = 999
      myProduct.session = []
      PRODUCTS.push(myProduct)
    }
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Milk',
    productType: 'Dairy',
    sumQuantity: 2,
    eartlestExpDate: '20-11-2021',
    dateAdded: '10-10-2021'
  },
  {
      id: 2,
      name: 'Banana',
      productType: 'Fruits',
      sumQuantity: 5,
      eartlestExpDate: '15-08-2021',
      dateAdded: '10-10-2021'
    },
    {
      id: 3,
      name: 'Chocolate Cookies',
      productType: 'Sweets',
      sumQuantity: 5,
      eartlestExpDate: '04-02-2023',
      dateAdded: '10-10-2021'
    }
  ]