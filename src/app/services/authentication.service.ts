import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './../login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
// login(username: string, password:string):boolean {
//   if (username == "daniel" && password == "daniel") {
//     localStorage.setItem('currentUser', "loggedin");
//     return true;
//   }
//   return false;
// }

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
