import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { NgForm } from '@angular/forms';
import { Claim } from './../claim.model';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
claim = new Claim();
message ='';
  constructor( private _toast: NgToastService,private service: ClaimService , private _router:Router, private _regService: RegisterService) { }

  ngOnInit(): void{

  }
/** add claim - we call in the customer details as a type string and get the current user LOCAL storage item
 * for testing we console log 
 * the registration service is then called to use the get user by username method that passes in that information.
 * from here we can set the user details to be an object that will 
 * return the claim owner/customer who made the claim
 * now because we have  that the claims we will create will be for that specific customer id 
 * that is set in localstorage. 
 */

 addClaim(){
  let userDetailsString: string = localStorage.getItem('currentUser') || '';
  console.log(userDetailsString);

  this._regService.getUserByUsername(userDetailsString).subscribe({next: res => {
    let userDetailsObjs;
    userDetailsObjs = res;
    console.log(userDetailsObjs);
    this.claim.customer = userDetailsObjs;
    this.service.createClaim(this.claim).subscribe({
      next: (res) =>{
        localStorage.setItem('customerId', userDetailsObjs.id);
        console.log("response received");
        this._router.navigate(['loginsuccess']);
        // this.message = "Claim Submission was Successful!";
        // alert("Your Claim has been SUBMITTED")
        this._toast.success({detail:"Success Message",summary:'Your Claim has been SUBMITTED!', duration:5000});

      },
      error: (e)=> {
        console.log("OOPS! Something's gone wrong");
        this.message=e.error;
      }
   })
  }})

 }


}
