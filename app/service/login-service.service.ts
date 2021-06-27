import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {login} from '../model/login'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    constructor(private httpClient:HttpClient) { }

    select(data:any): Observable<login> {
 
      return this.httpClient.post<login>('http://localhost:4000/select/',JSON.stringify(data),this.httpOptions)
      .pipe(
           catchError(err => {
            throw 'error in source. Details: ' + err;
          }) 
          
      )
      
    }

  


}
