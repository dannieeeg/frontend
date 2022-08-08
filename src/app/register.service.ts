import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }       

  public loginUser(customer : Customer):Observable<any> {
   return this._http.post("http://localhost:8080/login", customer);
   
  }

  public registerUser(customer : Customer):Observable<any>{
    return this._http.post("http://localhost:8080/registeruser", customer);
    
   }
}
