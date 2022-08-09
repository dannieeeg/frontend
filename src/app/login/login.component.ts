import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username: string = "";  
  // password: string = ""; 
  customer = new Customer();
  message = '';
  responsedata: any;
  customerid:any;
  editdata: any;



  LoginForm = new FormGroup({
    username: new FormControl( "", Validators.required),
    password: new FormControl("", Validators.required)
  })




  constructor(
    private _service : RegisterService,
    private _router: Router,
    private _auth: AuthenticationService,
    private _http: HttpClient) 
    { 
    if (this._auth.loggedIn) {  
      this._router.navigate(['loginsuccess']);  
    }  
  }

  ngOnInit(): void {
  }

  
  registerLink() {
    this._router.navigate(['/register'])
  }
  



  loginUser(){  
    this._service.loginUser(this.customer).subscribe({
      next:(res) =>{
        console.log("test"  + res.userName);
    if (this.customer.userName ===  res.userName   &&  this.customer.password === res.password) 
    {  
          localStorage.setItem('currentUser', res.userName)
          console.log("Response Received");
          this._router.navigate(["loginsuccess"]);  
      }  
      else  {
      console.log("Exception Occured");
        alert("Wrong username or password");  
          this._router.navigate(["/loginfailure"]);
      }
    }  
  }  
    )
  }
//   loginUser(){
//     this._service.loginUser(this.customer).subscribe({
//       next: (res) =>{
//         if (this.customer.userName !='' && this.customer.password != '')
//         console.log("Response Received");
//         this._router.navigate(['/loginsuccess'])
//       },
//       error:(e:any)=> {
//       console.log("Exception Occured");
//       this.message="Error"; 
//       this._router.navigate(["/loginfailure"]);
//       alert("Wrong username or password");  
//     }
//   })
// }
      
    
    
}