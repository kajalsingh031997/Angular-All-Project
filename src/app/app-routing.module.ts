import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from "./authentication.guard";
import { UserListComponent } from './fake-api-integration-file/user-list/user-list.component';
import { UserDetailComponent } from './fake-api-integration-file/user-detail/user-detail.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        canActivate: [AuthenticationGuard],
        component: DashboardComponent
      },
    ]
  },
  {path: 'user-list', component:UserListComponent},
  {path: 'user-detail/:id', component:UserDetailComponent},
  { path: '**', component: PagenotfoundComponent } //wildcard routing
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    // { enableTracing: true } //debugging purpose
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
