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
      console.log(myProduct)
      PRODUCTS.push(myProduct)
    }
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Milk',
    productType: 'Dairy',
    quantity: 2,
    dateExp: '20-11-2021',
    dateAdd: '10-10-2021'
  },
  {
      id: 2,
      name: 'Banana',
      productType: 'Fruits',
      quantity: 5,
      dateExp: '15-08-2021',
      dateAdd: '10-10-2021'
    },
    {
      id: 3,
      name: 'Chocolate Cookies',
      productType: 'Sweets',
      quantity: 5,
      dateExp: '04-02-2023',
      dateAdd: '10-10-2021'
    }
  ]