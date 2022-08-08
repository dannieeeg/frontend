import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from '../claim.service';
import { Claim } from './../claim.model';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.scss']
})
export class EditClaimComponent implements OnInit {
  claim!: Claim;
  message = '';
  myFiles:string [] = [];

  constructor(private route: ActivatedRoute, private claimService: ClaimService, private _router: Router) { }

  ngOnInit() {
    let claimId: any = this.route.snapshot.paramMap.get('id');
    this.claimService.getClaimById(claimId)
    .subscribe(res => {
      this.claim = res;
      console.log(res);
    });
    
  }


  updateClaims(){
    this.claimService.updateClaims(this.claim,this.claim.claimId).subscribe({
      next: (res) =>{
        console.log("response received");
        this._router.navigate(['loginsuccess']);
        this.message = " You've Edited Your Claim!";
      },
      error: (e)=> {
        console.log("OOPS! Something's gone wrong");
        this.message=e.error;
      }
   })
   }


   onFileChange(event:any){
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
  }
   }
}
