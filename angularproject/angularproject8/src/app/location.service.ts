import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl="http://localhost:3000/locations";

// location:Location=new Location();




  constructor(private httpClient:HttpClient) { }


  getAllLocation():Observable<any>{

    return this.httpClient.get(this.baseUrl);
  }

  getAllLocationForStudent():Observable<Location[]>{

    return this.httpClient.get<Location[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(()=>new Error('test'));

  }

  createLocation(location:Location):Observable<any>{

   return this.httpClient.post(this.baseUrl,location);
  }

  deleteLocation(id:string):Observable<any>{

    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  updateLocation(id:string,location:Location):Observable<any>{

    return this.httpClient.put(this.baseUrl+"/"+id,location);
  }

  getById(id:string):Observable<any>{

    return this.httpClient.get(this.baseUrl+"/"+id);
  }
}
