import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURI = "http://localhost:4000/users";

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
  
 constructor(private http: HttpClient) { }

 getUsers(){
  return this.http.get(`${this.baseURI}/profile`);
  
}
}
