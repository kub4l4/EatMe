import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { ISearchProduct } from "../_models/SearchProduct.model";

const API_URL = 'http://localhost:8080/api/v2/products';


@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  private selectedOption = new BehaviorSubject<ISearchProduct>({
    id: null,
    servingSize: null,
    code: null,
    ecoscoreTags: null,
    productQuantity: null,
    productName: null,
    novaGroups: null,
    categories: null,
    productSizeType: null,
  });

  private selectedOptions = new BehaviorSubject<ISearchProduct[]>([]);


  option$ = this.selectedOption.asObservable();

  options$ = this.selectedOptions.asObservable();

  isOptionEmpty$: Observable<boolean>;

  isOptionsEmpty$: Observable<boolean>;

  search(q: string): Observable<ISearchProduct[]> {
    return this.http.get<ISearchProduct[]>(
      API_URL + '/PM/search/' + q
    );
  }

  updateSelectedOption(option: ISearchProduct) {
    this.selectedOption.next(option);
  }

  updateSelectedOptions(options: ISearchProduct[]) {
    this.selectedOptions.next(options);
  }
}
