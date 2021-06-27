import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import {AdddCourse} from '../components/AddCourse/AddCourse.component'
// import {environment} from 'src/environments/environment'
import{course} from '../model/course';
import{quiz} from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiServer = "http://localhost:4000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

constructor(private httpClient: HttpClient) { }


 select(): Observable<course[]> {
  
    return this.httpClient.get<course[]>(this.apiServer + '/selectCourse')
  
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
        })  
    )
  }
  showQuizById(data:any): Observable<quiz[]> {
    //alert(JSON.stringify(data.course_id));
    return this.httpClient.get<quiz[]>(this.apiServer + '/selectQuiz/'+data.course_id)
  
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
          
        }) 
    )
     

  }
  // submitQuiz(): Observable<quiz> {
  //   //alert(data);
  //   return this.httpClient.post<quiz>(this.apiServer + '/storeResult')
  //   .pipe(
  //     catchError(err => {
  //       throw 'error in source. Details: ' + err;
  //     })
  //   )
  // } 

}
