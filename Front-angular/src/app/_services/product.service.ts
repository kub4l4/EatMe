import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { IProduct } from "../_models/Product.model";

const API_URL = 'http://localhost:8080/api/v2/products/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  saveProduct(productName: string, productQuantity: number, expireDate: number) {
    return this.http.post<any>(API_URL, {
      productName,
      productQuantity,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>('add')))
  }


  updateProduct(idProduct: number, productName: string, amountLeft: number, expireDate: number) {
    return this.http.put<any>(API_URL + "edit", {
      idProduct,
      productName,
      amountLeft,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>("edit")))
  }

  archiveProduct(id: number) {
    return this.http.put<any>(API_URL + "archive/" + id, null)
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + "userProducts")
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<IProduct>(API_URL + "userProduct/" + id)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("handleError");
      console.error();
      return of(result as T)
    }
  }

}
