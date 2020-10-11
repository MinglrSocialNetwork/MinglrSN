import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalfeedComponent } from './globalfeed/globalfeed.component';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path: 'globalfeed', component: GlobalfeedComponent,  canActivate: [AuthGuard]},
  {path: 'personalpage', component: PersonalpageComponent,  canActivate: [AuthGuard]},
  {path: 'navbar', component: NavigationComponent, canActivate: [AuthGuard]},
  {path:'', component: LoginComponent}
];

export const routingComponents =[RegistrationComponent,LoginComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
