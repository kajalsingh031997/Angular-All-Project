import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthServiceService, private router: Router){}
  canActivate(): boolean{
    /**
     * this method helps to redirect one compoenent to another if it is velid route or you can say authorised route
     */
    if (!this.Authguardservice.getToken()) {
      this.router.navigateByUrl("/");
    }
    return this.Authguardservice.getToken();
  }

}
