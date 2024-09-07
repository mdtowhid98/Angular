import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = "http://localhost:8087/api/medicinecategory/"

  constructor(private httpClient: HttpClient) { }

  getAllMedicineCategory(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createMedicineCategory(category: CategoryModel): Observable<any> {

    return this.httpClient.post(this.baseUrl + "save", category);
  }


}
