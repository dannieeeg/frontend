import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from './claim.model';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private _http: HttpClient) { }

  public getAllClaims( ): Observable<Claim[]> {
    return this._http.get<Claim[]>("http://localhost:8080/claims/findall");
  }

  public getClaimById(claimId: number):Observable<any>{
    return this._http.get(`http://localhost:8080/claims/find/${claimId}`);
   }

  public createClaim(claim: Claim):Observable<Claim> {
    return this._http.post<Claim>("http://localhost:8080/claims/create", claim);
  }



  public updateClaims(claim: Claim, id: any):Observable<Claim> {
let httpHeader = { headers: new HttpHeaders ({username:localStorage.getItem('currentUser'),password:localStorage.getItem('currentPass') })}

    return this._http.put<Claim>(`http://localhost:8080/claims/update/${id}`, claim, httpHeader);
  }

  public deleteClaim(id: any): Observable<void> {
    let httpHeader = { headers: new HttpHeaders ({username:localStorage.getItem('currentUser'),password:localStorage.getItem('currentPass') })}

    return this._http.delete<void>(`http://localhost:8080/claims/delete/${id}`, httpHeader);
  }

}
