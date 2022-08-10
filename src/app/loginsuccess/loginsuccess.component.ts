import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';
import { Customer } from '../customer';
import { AuthenticationService } from '../services/authentication.service';
import { Claim } from './../claim.model';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent implements OnInit {

  searchText: any;
  customer:Customer[] | undefined;
  claims: Claim[] | undefined;
  username: string = localStorage.getItem('currentUser');

  constructor(private authenticationService: AuthenticationService,private _service: ClaimService, private router: Router) { }

  ngOnInit(): void {
    this._service.getAllClaims().subscribe(
      (res: Claim[]) => {
        console.log(res);
        this.claims = res.filter(claim => claim.customer.id == parseInt(localStorage.getItem('customerId')));
      }
    )
  }

status(){
  alert("Your Claim is IN PROGRESS");
}

  logout() {
    localStorage.removeItem('customerId');  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  


  editClaim(claimId: any) {
    this.router.navigate(['editClaim', claimId]);
  }



  deleteClaim(claimId: any) {
    this._service.deleteClaim(claimId).subscribe({
      next: Claim => {
        this.claims;
        alert("You Have Deleted This Claim!");
        location.reload()

      } ,
      error: (e) => {}
    });
  }

}
