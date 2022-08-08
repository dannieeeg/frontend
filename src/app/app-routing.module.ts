import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginfailureComponent } from './loginfailure/loginfailure.component';
import { RegisterComponent } from './register/register.component';
import { ClaimsComponent } from './claims/claims.component';
import { EditClaimComponent } from './edit-claim/edit-claim.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'loginsuccess', component:LoginsuccessComponent},
  { path:'loginfailure', component:LoginfailureComponent},
  { path:'register', component:RegisterComponent},
  { path:'claims', component:ClaimsComponent},
  { path:'editClaim/:id', component:EditClaimComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
