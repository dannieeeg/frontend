import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   customer = new Customer();
   message = '';

  constructor( private service : RegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.service.loginUser(this.customer).subscribe(
      data =>{
        console.log("Response Received");
        this._router.navigate(['/loginsuccess'])
      },
      error => {console.log("Exception Occured");
      this.message ="Incorrect Credentials. Either your Email or Password is incorrect! Please try again."
      // this._router.navigate(["/loginfailure"])
      }
    )
  }

  registerLink() {
    this._router.navigate(['/register'])
  }
}
