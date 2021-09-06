import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from "rxjs";
import { IMyProduct } from "../_models/myProduct.model";
import { catchError } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { ICategory } from "../_models/category.model";

const API_URL = 'http://localhost:8080/api/category/';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class CategoryService {

  constructor(private http : HttpClient) {
  }

  getCategories() : Observable<any[]> {
    return this.http.get<any[]>(API_URL)
  }

  saveCategory(title : string, description : string) {
    return this.http.post<any>(API_URL, {
      title,
      description
    }, httpOptions)
      .pipe(catchError(this.handleError<ICategory[][]>('saveCategory')))
  }


  private handleError<T>(operation = 'operation', result? : T) {
    return (error : any) : Observable<T> => {
      console.log("handleError");
      console.error();
      return of(result as T)
    }
  }

}
