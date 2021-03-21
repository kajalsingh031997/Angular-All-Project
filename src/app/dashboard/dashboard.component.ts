import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  user : any = [];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('users')) {
      this.user = JSON.parse(localStorage.getItem('users') || '{}');
    }
  }

}
