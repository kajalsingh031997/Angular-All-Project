import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  @Input() userName: string = ""; //pass data through parent 
  constructor() { }

  ngOnInit(): void {
    console.log(this.userName)
  }

}
