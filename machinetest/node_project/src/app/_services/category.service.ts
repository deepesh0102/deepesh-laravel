import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Category } from '../_models/category';

const categoryBaseUrl = 'http://localhost:3000/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  addCategory(newCategory:Category){
    return  this.http.post<Category>(categoryBaseUrl+'/add' , newCategory);
  }


  getCategoryList():Observable<Category[]>
  {
     return this.http.get<Category[]>(categoryBaseUrl+'/list');
  } 

}
 