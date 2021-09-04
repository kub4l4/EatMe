import { Injectable } from "@angular/core"
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subject} from "rxjs";
import { IMyProduct } from "../_models/myProduct.model";
import {catchError} from "rxjs/operators";
import {FormControl} from "@angular/forms";

const API_URL = 'http://localhost:8080/api/products/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {
  temp: any[]

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IMyProduct[]> {
    let subject = new Subject<IMyProduct[]>()
    setTimeout(() => {
      this.http.get<IMyProduct[]>(API_URL);
      subject.complete();
    }, 100)
    return subject
  }

  getProduct(id: number) {
    //return PRODUCTS.find(product => product.id === id)
  }

  saveProduct(name: string, categoryId: number, quantity: number, expireDate: string) {
    return this.http.post<any>(API_URL, {
      name,
      categoryId,
      quantity,
      expireDate
    },httpOptions)
      .pipe(catchError(this.handleError<IMyProduct[][]>('saveProduct')))
  }

  deleteProduct(id:number) {
    return this.http.delete<any>(API_URL + id)
  }

  getProducts1(): Observable<any[]> {
    return this.http.get<IMyProduct[]>(API_URL)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("handleError");
      console.error();
      return of(result as T)
    }
  }

}
