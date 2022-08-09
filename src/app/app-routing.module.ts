import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginfailureComponent } from './loginfailure/loginfailure.component';
import { RegisterComponent } from './register/register.component';
import { ClaimsComponent } from './claims/claims.component';
import { EditClaimComponent } from './edit-claim/edit-claim.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'', component:LoginComponent},

  { path:'loginsuccess', component:LoginsuccessComponent, 
  canActivate: [AuthGuard]},

  { path:'loginfailure', component:LoginfailureComponent},

  { path:'register', component:RegisterComponent},

  { path:'claims', component:ClaimsComponent,
  canActivate: [AuthGuard]},
  
  { path:'editClaim/:id', component:EditClaimComponent,
  canActivate: [AuthGuard]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
