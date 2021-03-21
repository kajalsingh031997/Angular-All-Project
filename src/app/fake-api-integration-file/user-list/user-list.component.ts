import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  userList : any = [];
  constructor(private api:UserApiService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList():void{
    this.api.getUserList().subscribe(
      (res:any)=>{
        console.log(res);
        this.userList = res;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
