import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from '../model/people';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPeople(): Observable<any> {
    return this.http.get(environment.apiUrl).pipe(map((response: any) => response));
  }

  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
