import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  /**
   * @author kajal singh
   * @description getToken helps to get the session user token 
   */
  getToken() {
    return !! localStorage.getItem("sessionUser")
  }
  
}

