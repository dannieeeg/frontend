import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Customer } from '../customer';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog, MatDialogContainer, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


isValidFormSubmitted = false;
validateEmail = true;
// registerForm!: FormGroup;
customer = new Customer();
message = '';
  constructor(private _dialog:MatDialog,private _toast: NgToastService,private _fb: FormBuilder,private service: RegisterService, private _router: Router) { }

  ngOnInit(): void {

    // this.registerForm = this._fb.group({
    //   firstname:['',Validators.required],
    //   lastname:['',Validators.required],
    //   email:['',Validators.required],
    //   username:['',Validators.required],
    //   password:['',Validators.required]
    //
  }

  closeDialog(){
    this._dialog.closeAll();
  }
  /* thie registerUser method will call the register service that calls the customer values api which is set to an observable
    so we subscribe to see whats going on with that obj. were saying if we get the data on the backend the object
    is received and to navigate to the loginpage to login. a message will appear that says youre all signed up

    if there is an error we will send an error message and continue to send an error message to the console of the front end 
  
  */
  registerUser(){
    this.service.registerUser(this.customer).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['']);
        this._toast.success({detail:"Success Message", summary:"Registration Was Successful!",duration: 5000})
        this.closeDialog();
     
      },
      error => {
        console.log("OOPS! Something's gone wrong!");
        this._toast.error({detail:"Error Message", summary:"Your Registration Was Unsuccessful!", duration:5000})

      }
    )
  }

}
