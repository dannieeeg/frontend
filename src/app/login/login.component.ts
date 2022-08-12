import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm!: FormGroup
  customer = new Customer();
  message = '';
  responsedata: any;
  customerid:any;
  editdata: any;



  // LoginForm = new FormGroup({
  //   username: new FormControl( "", Validators.required),
  //   password: new FormControl("", Validators.required)
  // })




  constructor(
    private _formBuilder: FormBuilder,
    private _service : RegisterService,
    private _router: Router,
    private _auth: AuthenticationService,
    private _http: HttpClient,
    private _dialog: MatDialog,
    private _toast: NgToastService)
    
    
    { 
    if (this._auth.loggedIn) {  
      this._router.navigate(['loginsuccess']);  
    }  
  }

  ngOnInit(): void {
    // this.loginForm = this._formBuilder.group({
    //   username:['',Validators.required],
    //   password:['', Validators.required]
    // })
  }



  openDialog(){
    this._dialog.open(RegisterComponent);
  }


  // this will call the router import to move the user to the register form 
  
  registerLink() {
    this._router.navigate(['/register'])
  }
  

/*  this will call the register service and take that function 
loginUser that calls the the Java api.  
 we subscribe because theres an observable type 
 of any and we want to watch what that obsrvable is doing 
 following typescript syntax we pass in an if-statement 
 for if the customer username/pw is equal to the results userName
 and password then we SET it to Local storage 

 current user is from auth 

 we then call the service again for getting the user by the username and passing in the result of that username
 we want to subscribe to the local storage set item of customerid and the resulting id 
 to be able to navigate to the loginsuccess claims dashboard 
 
 
 
 */

  loginUser(){  
    this._service.loginUser(this.customer).subscribe({
      next:(res) =>{
    if (this.customer.userName ===  res.userName   &&  this.customer.password === res.password) 
    {  
      // new local storage var data
          localStorage.setItem('currentUser', res.userName)
          localStorage.setItem('currentPass', res.password)
          console.log("Response Received");
      
          this._service.getUserByUsername(res.userName).subscribe({
            next: res => {
              console.log(res.id);
              console.log('current username: ' + res.userName + ' '+'current password: ' + res.password);
              localStorage.setItem('customerId', res.id);
              localStorage.setItem('currentUser', res.userName);
              localStorage.setItem('currentPass', res.password);
            }
          });
        //   new success message popup and redirect 
          this._toast.success({detail:"Success Message", summary:"Login Was Successful!",duration: 5000})
          this._router.navigate(["loginsuccess"]);  
      }  
      else  {
      console.log("Exception Occured");
          
      // new error message and redirect
        this._toast.error({detail:"Error Message", summary:"User Not Found",duration: 5000})

          this._router.navigate(["/loginfailure"]);
      }
    }  
  }  
    )
  } 
    
    
}