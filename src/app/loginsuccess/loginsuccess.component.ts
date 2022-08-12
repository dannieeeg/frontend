import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';
import { Customer } from '../customer';
import { AuthenticationService } from '../services/authentication.service';
import { Claim } from './../claim.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent implements OnInit {

  displayedColumns: string[] = ['policy #', 'amount', 'description', 'file'];
  dataSource = Claim;
  /* bringing in the customer object with an open list(array.as)
  
  bringing in the claims as a list(array collection)
  storing the username type as a string that is stored in LOCAL STORAGE AS current user which is from auth guard&service*/
  searchText: any;
  customer:Customer[] | undefined;
  claims: Claim[] | undefined;

  // pass in username and string 
  username: string = localStorage.getItem('currentUser');

  constructor(private _toast: NgToastService,private authenticationService: AuthenticationService,private _service: ClaimService, private router: Router) { }



/**on the page initialization the CLAIM SERVICE will call the getAllClaims method and subscribe 
 * it will have a result as the claims list and we will filter this claims 
 * list by customer Id and set that equal to
 * the localStorage instance of customerId. we parse through them and get the specific claims for the 
 * associated customer ID
 */

  ngOnInit(): void {
    this._service.getAllClaims().subscribe(
      (res: Claim[]) => {
        console.log(res);
        this.claims = res.filter(claim => claim.customer.id == parseInt(localStorage.getItem('customerId')));
      }
    )
  }

status(){
  // alert("Your Claim is IN PROGRESS");
  this._toast.info({detail:"INFO", summary:"Your Claim is Now in Progress!",duration: 5000})

}


// this will remove the currentUser from the localStorage and calls the authService to handle the logout 
// from which we return to the login page component
  logout() {
    localStorage.removeItem('customerId');  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
    this._toast.info({detail:"You're Leaving Your Portal", summary:"GOODBYE",duration: 6000})

  }  


  editClaim(claimId: any) {
    if ( this.authenticationService.loggedIn ) {
    this._toast.info({detail:"EDIT your Claim", summary:"Tell Us How We Can Help",duration: 6000})

    this.router.navigate(['editClaim', claimId]);
    }
  }


// this method will call the claim service and follow the delete claim method from said service
// we subscribe to the method and see that the claim will return an alert that states the claim has deleted
// we reload after the alert okay button has been clicked 





  deleteClaim(claimId: any) {
    this._service.deleteClaim(claimId).subscribe({
      next: Claim => {
        this.claims;
        // alert("You Have Deleted This Claim!");
        this._toast.warning({detail:"WARNING", summary:"Youre deleting your claim",duration: 6000})

        location.reload()

      } ,
      error: (e) => {}
    });
  }


}