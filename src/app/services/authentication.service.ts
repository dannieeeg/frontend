import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './../login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {


/** loginUser will provide the userCred of type any so that we can authenticate the users that are registered
 * to move to the next page 
 * 
 * the logout method here is when the user that was set wil be removed along with the information 
 * that is owned by that user

 */


loginUser(userCred: any){
  return this._http.post("http://localhost:8080/login/authenticate", userCred);
}

logout(){
  localStorage.removeItem('currentUser');
}
public get loggedIn(): boolean {
  return (localStorage.getItem('currentUser') !== null);}
  constructor( private _http: HttpClient) { }
}
