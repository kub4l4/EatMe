import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { IMyProduct } from "../_models/myProduct.model";

const API_URL = 'http://localhost:8080/api/products/';

@Injectable()
export class ProductService{
  temp : any[]

  constructor(private http: HttpClient) { }

  getProducts():Observable<IMyProduct[]>{
    let subject = new Subject<IMyProduct[]>()
    setTimeout(() => {this.http.get<IMyProduct[]>(API_URL); subject.complete();}, 100)
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

  getProducts1(): Observable<any[]> {
    return this.http.get<IMyProduct[]>(API_URL)
//Tutaj jest problem z odbieraniem zmiennej. Albo zmienić API, albo tutaj jakoś wyselekcjonować dane
  }

}

const PRODUCTS:any[] = [
  {

  },
  ]
