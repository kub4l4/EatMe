import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from "rxjs";
import { IMyProduct } from "../_models/myProduct.model";
import { catchError } from "rxjs/operators";
import { FormControl } from "@angular/forms";

const API_URL = 'http://localhost:8080/api/category/';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class CategoryService {
  temp : any[]

  constructor(private http : HttpClient) {
  }

  getCategories() : Observable<any[]> {
    return this.http.get<any[]>(API_URL)
  }

  saveCategory(name : string, categoryId : number, quantity : number, expireDate : string) {
    return this.http.post<any>(API_URL, {
      name,
      categoryId,
      quantity,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<IMyProduct[][]>('saveProduct')))
  }

  updateCategory(id : number, name : string, categoryId : number, quantity : number, expireDate : string) {
    return this.http.put<any>(API_URL + id, {
      name,
      categoryId,
      quantity,
      expireDate
    }, httpOptions)
      .pipe(catchError(this.handleError<IMyProduct[][]>('saveProduct')))
  }

  deleteCategory(id : number) {
    return this.http.delete<any>(API_URL + id)
  }



  private handleError<T>(operation = 'operation', result? : T) {
    return (error : any) : Observable<T> => {
      console.log("handleError");
      console.error();
      return of(result as T)
    }
  }

}
