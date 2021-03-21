import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  headers : any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'this.basic'
  });

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get('https://jsonplaceholder.typicode.com/users', this.headers);
  }
}
