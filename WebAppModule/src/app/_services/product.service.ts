import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
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
      .pipe(catchError(this.handleError))
  }

  fillProduct2(idProduct: number, expireDate: number, productQuantity: number, productSizeType: string) {
    return this.http.post<any>(API_URL + "/userProduct/PM", {
      idProduct,
      expireDate,
      productQuantity,
      productSizeType
    }, httpOptions)
      .pipe(catchError(this.handleError))
  }

  saveNewProduct(productName: string, productQuantity: number, productSizeType: string, expireDate: number) {
    return this.http.post<String>(API_URL + "/userProduct/new", {
      productName,
      productQuantity,
      productSizeType,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError))
  }

  editQuantity(idProduct: number, amountLeft: number) {
    return this.http.put<any>(API_URL + "/userProduct", {
      idProduct,
      amountLeft,
    }, httpOptions)
      .pipe(catchError(this.handleError))
  }

  editProduct(idProduct: number, productName: string, amountLeft: number, expireDate: number) {
    return this.http.put<any>(API_URL + "/userProduct", {
      idProduct,
      productName,
      amountLeft,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError))
  }

  archiveProduct(id: number) {
    return this.http.put<number>(API_URL + "/userProduct/" + id, null)
      .pipe(catchError(this.handleError))
  }

  getUserProducts(): Observable<IProductTable[]> {
    return this.http.get<IProductTable[]>(API_URL + "/userProduct")
      .pipe(catchError(this.handleError))
  }

  getUserProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(API_URL + "/userProduct/" + id)
      .pipe(catchError(this.handleError))
  }

  getProductByIdFromPM(id: any): Observable<any> {
    return this.http.get<IProduct>(API_URL + "/PM/" + id)
      .pipe(catchError(this.handleError))

  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = 'Something bad happened; please try again later';
    if (error.status === 0) {
      errorMessage += `\nAn error occurred: ${error.error} (A client-side or network error occurred)`
    } else {
      errorMessage += `\nBackend returned code ${error.status}.`
      console.log('Body was:', error.error)
    }
    return throwError(errorMessage)
  }

}
