import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';
import { Claim } from './../claim.model';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent implements OnInit {
claims: Claim[] | undefined;


  constructor(private _service: ClaimService, private router: Router) { }

  ngOnInit(): void {
    this._service.getAllClaims().subscribe(
      (res: Claim[]) => {
        this.claims = res;
      }
    )
  }

  editClaim(claimId: any) {
    this.router.navigate(['editClaim', claimId]);
  }

  deleteClaim(claimId: any) {
    this._service.deleteClaim( claimId).subscribe({
      next: Claim => {
        this.claims;
      },
      error: (e) => {}
    });
  }

}
