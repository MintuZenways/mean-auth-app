import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURI = "http://localhost:4000/users";

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
  
 constructor(private http: HttpClient) { }

 create(data: User):Observable<any>{
   return this.http.post(`${this.baseURI}/sign-up`, data).pipe(
     catchError(this.errorHandler)
   );
 }

 login(user:User):Observable<any>{
   return this.http.post<any>(`${this.baseURI}/sign-in`,  user);
     //return true;
  
 }

 getToken(){
   return localStorage.getItem("access-token");
 }
 get isLoggedIn(): boolean{
   let authToken = localStorage.getItem('access-token');
   return authToken !== null ? true : false;
 }

 
 errorHandler(error: HttpErrorResponse){
  console.log(error);
  return throwError("Error");
}

}
