import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, elementAt, of } from 'rxjs';
import { Categories } from '../../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }



  get_categories(): Observable<Categories[]> {


    return this.http.get<Categories[]>("http://localhost:5124/api/Catgegory")
  }

}
