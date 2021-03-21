import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {

  userDetail: any = [];
  id : number = 1;
  constructor(private api:UserApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
        this.id = +params['id'];
      });
    this.getUserDetail();
  }

  getUserDetail():void{
    this.api.getUserList().subscribe(
      (res:any)=>{
        var id = this.id;
        this.userDetail = res.find(function(elt:any){
          return elt.id == id;
        });
      }
    )
  }

}
