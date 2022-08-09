import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginfailureComponent } from './loginfailure/loginfailure.component';
import { ClaimsComponent } from './claims/claims.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { WjCoreModule } from '@grapecity/wijmo.angular2.core';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import {MatCardModule} from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditClaimComponent } from './edit-claim/edit-claim.component';
// import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginsuccessComponent,
    LoginfailureComponent,
    ClaimsComponent,
    NavbarComponent,
    EditClaimComponent,
    
  
    
    

    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    WjCoreModule,
    WjGridModule,
    Ng2SearchPipeModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
