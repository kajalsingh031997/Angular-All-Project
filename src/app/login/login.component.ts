import {
  Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked,
  DoCheck
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login', //selector with this we are add this into the another html
  templateUrl: './login.component.html', //html
  styleUrls: ['./login.component.less'] //css
})
export class LoginComponent implements OnInit, OnChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterContentInit, OnDestroy, DoCheck {

  model = new UserLogin('username', 'password');
  user ="1";

  //it runs first and it create instance of the services
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //life cycle hooks 
  // it runs first whenever it initialise component it runs and when @input property change it runs
  ngOnChanges(): void{
    //ngOnChange
  }

  //it runs second 
  ngOnInit(): void {
    //ngOnInit
  }

  //it runs when ever compoenent change detect
  ngDoCheck():void{
    //ngDoCheck
  }

  //it runs when ng-content initialise 
  ngAfterContentInit():void{
    //ngAfterContentInit
  }

  //it runs when ng-content change detect 
  ngAfterContentChecked():void{
    //ngAfterContentChecked
  }

  //it runs when parent and child initialised  
  ngAfterViewInit(): void{
    //ngAfterViewInit
  }

  //it runs when parent and child initialised and detect change inside parent and child 
  ngAfterViewChecked():void{
    //ngAfterViewChecked
  }

  //it runs when we swtich one component to another it runs
  ngOnDestroy():void{
    //ngOnDestroy
  }

  onSubmit() {
    localStorage.setItem('sessionUser',this.user);
    localStorage.setItem('users',JSON.stringify(this.model));
    this.router.navigate(['/dashboard']); //this helps to navigation another route after success of login
  }

}



//interface - it will help to create an structure of data which means data property must match types 
export class UserLogin {
  constructor(
    public name: string,
    public password: string
  ) { }
}