import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import {AdddCourse} from '../components/AddCourse/AddCourse.component'
// import {environment} from 'src/environments/environment'
import{course} from '../models/course'
import{quiz} from'../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class  MyserviceService {

  private apiServer = "http://localhost:4000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

constructor(private httpClient: HttpClient) { }
save(data:any): Observable<course> {
  //alert(data);
  return this.httpClient.post<course>(this.apiServer + '/insert', JSON.stringify(data), this.httpOptions)
  .pipe(
    catchError(err => {
      throw 'error in source. Details: ' + err;
    })
  )
} 
Create(data:any): Observable<quiz> {
  //alert(data);
  return this.httpClient.post<quiz>(this.apiServer + '/createQuiz', JSON.stringify(data), this.httpOptions)
  .pipe(
    catchError(err => {
      throw 'error in source. Details: ' + err;
    })
  )
} 

// Create(data:any): Observable<course> {
//   //alert(data);
//   return this.httpClient.post<course>(this.apiServer + '/createQuiz', JSON.stringify(data), this.httpOptions)
//   .pipe(
//     catchError(err => {
//       throw 'error in source. Details: ' + err;
//     })
//   )
// } 
 select(): Observable<course[]> {
  
    return this.httpClient.get<course[]>(this.apiServer + '/select')
    

    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
        })  
    )
  }
  showQuizz(): Observable<quiz[]> {
    
    return this.httpClient.get<quiz[]>(this.apiServer + '/selectQuiz')
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
          
        }) 
    )
     

  }

  getCourseID(data:any): Observable<quiz[]> {
    
    return this.httpClient.get<quiz[]>(this.apiServer + '/getCourseID/'+data.course_id)
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
          
        }) 
    )
     

  }
  showQuizById(data:any): Observable<quiz[]> {
    
    return this.httpClient.get<quiz[]>(this.apiServer + '/selectQuiz/'+data.course_id)
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
          
        }) 
    )
     

  }
  getAll(): Observable<quiz[]> {
    return this.httpClient.get<quiz[]>(this.apiServer + '/getAll')
    .pipe(
         catchError(err => {
          throw 'error in source. Details: ' + err;
        })  
    )
  }
  // showQuizz(id:any): Observable<course[]> {
  //   return this.httpClient.get<course[]>(this.apiServer + '/selectQuiz'+id)
  //   .pipe(
  //        catchError(err => {
  //         throw 'error in source. Details: ' + err;
  //       })  
  //   )
  // }
  updateInfo(data: any): Observable<course> {
    return this.httpClient.post<course>(this.apiServer + '/update/', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  updateQuiz(data: any): Observable<quiz> {
    return this.httpClient.post<quiz>(this.apiServer + '/updateQuiz/', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  // updateQuiz(data: any): Observable<course> {
  //      return this.httpClient.post<course>(this.apiServer + '/updateQuiz/', JSON.stringify(data), this.httpOptions)
  //     .pipe(
  //        catchError(this.errorHandler)
  //      )
  //    }

  deleteInfo(data:any){
    return this.httpClient.get<course>(this.apiServer + '/delete/' + data.course_id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteQuiz(data:any){
    return this.httpClient.get<quiz>(this.apiServer + '/deleteQuiz/' + data.ques_id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  // deleteQuiz(data:any){
  //   return this.httpClient.get<course>(this.apiServer + '/deleteQuiz/' + data.ques_id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
 
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}


