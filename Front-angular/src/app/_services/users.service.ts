import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_models/user.model';

const API_URL = 'http://localhost:8080/api/user/';

@Injectable({
  providedIn : 'root'
})
export class UsersService {
  constructor(private http : HttpClient) {
  }

  getAll() : Observable<Users[]> {
    return this.http.get<Users[]>(API_URL + 'all');
  }

  getUsers() : Observable<any> {
    return this.http.get(API_URL + 'all', {responseType : 'text'});
  }

}
