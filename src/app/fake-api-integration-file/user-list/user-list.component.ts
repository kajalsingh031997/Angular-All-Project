import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit, OnDestroy {

  model: any = {};
  userList: any = [];
  constructor(private api: UserApiService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.api.getUserList().subscribe(
      (res: any) => {
        let user = JSON.parse(localStorage.getItem('newUser') || '{}');
        let users = res.concat(user);
        this.userList = users;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  onSubmit() {
    localStorage.setItem('newUser', JSON.stringify(this.model));
    this.getUserList();
  }

  getUserId(id:any){
    localStorage.setItem('newId', id);
  }

  delteUser(){
    this.getUserList();
  }

  ngOnDestroy():void{
    localStorage.removeItem('newId');
    localStorage.removeItem('newUser');
  }
}
