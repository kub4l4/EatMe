import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { IProduct } from "../_models/Product.model";
import { IProductTable } from "../_models/product-table.model";

const API_URL = 'http://localhost:8080/api/v2/products';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  fillProduct1(idProduct: number, expireDate: number) {
    return this.http.post<any>(API_URL + "/userProduct/PM", {
      idProduct,
      expireDate,
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>('add')))
  }

  fillProduct2(idProduct: number, expireDate: number, productQuantity: number, productSizeType: string) {
    return this.http.post<any>(API_URL + "/userProduct/PM", {
      idProduct,
      expireDate,
      productQuantity,
      productSizeType
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>('add')))
  }

  saveNewProduct(productName: string, productQuantity: number, productSizeType: string, expireDate: number) {
    return this.http.post<String>(API_URL + "/userProduct/new", {
      productName,
      productQuantity,
      productSizeType,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<any>('add')))
  }

  editQuantity(idProduct: number, amountLeft: number) {
    return this.http.put<any>(API_URL + "/userProduct", {
      idProduct,
      amountLeft,
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>("edit")))
  }

  editProduct(idProduct: number, productName: string, amountLeft: number, expireDate: number) {
    return this.http.put<any>(API_URL + "/userProduct", {
      idProduct,
      productName,
      amountLeft,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<IProduct[][]>("edit")))
  }

  archiveProduct(id: number) {
    return this.http.put<number>(API_URL + "/userProduct/" + id, null)
  }

  getUserProducts(): Observable<IProductTable[]> {
    return this.http.get<IProductTable[]>(API_URL + "/userProduct")
  }

  getUserProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(API_URL + "/userProduct/" + id)
  }

  getProductByIdFromPM(id: any): Observable<any> {
    return this.http.get<IProduct>(API_URL + "/PM/" + id)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("handleError");
      console.error();
      return of(result as T)
    }
  }
}
