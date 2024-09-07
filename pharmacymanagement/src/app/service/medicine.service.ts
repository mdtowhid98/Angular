import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineModel } from '../model/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  baseUrl: string = "http://localhost:8087/api/medicine/"


  constructor(private httpClient: HttpClient) { }


  getAllMedicine(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createMedicine(medicine:MedicineModel):Observable<MedicineModel>{

    return this.httpClient.post<MedicineModel>(this.baseUrl+"save",medicine);
  }

}
