import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
customer = new Customer();
message = '';
  constructor( private service: RegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUser(this.customer).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['']);
        this.message = "You're all signed up!";
      },
      error => {
        console.log("OOPS! Something's gone wrong!");
        this.message=error.error;
      }
    )
  }

}
