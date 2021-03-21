import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // this module help to add ngmodal 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; //this module help to redirect one page to another you can say feature module
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthServiceService } from './auth-service.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './fake-api-integration-file/user-list/user-list.component';
import { UserDetailComponent } from './fake-api-integration-file/user-detail/user-detail.component';

@NgModule({
  //here we declare components
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent,
    UserListComponent,
    UserDetailComponent
  ],
  //here we imports all the modules it can be shared, featured and 3rd party module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //here we add services
  providers: [AuthServiceService],
  //it bootstrap the app component
  bootstrap: [AppComponent]
})
export class AppModule { 
  //we can write here also
  constructor(){
    //main working
  }
}
