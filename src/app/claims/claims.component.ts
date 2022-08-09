import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { NgForm } from '@angular/forms';
import { Claim } from './../claim.model';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
claim = new Claim();
message ='';
  constructor( private service: ClaimService , private _router:Router) { }

  ngOnInit(): void{

  }
 

 addClaim(){
  this.service.createClaim(this.claim).subscribe({
    next: (res) =>{
      console.log("response received");
      this._router.navigate(['loginsuccess']);
      this.message = "Claim Submission was Successful!";
      alert("Your Claim has been SUBMITTED")
    },
    error: (e)=> {
      console.log("OOPS! Something's gone wrong");
      this.message=e.error;
    }
 })
 }


}
