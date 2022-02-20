import{ Component } from'@angular/core';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styles:[`.offline{
        color:white;
    }`]
})
export class UserComponent{
 userid:number=10;
 userStatus:string;

 constructor() {
     this.userStatus=Math.random() > 0.5 ? 'online' : 'offline';
 }
 getuserStatus() {
     return this.userStatus;
 }
 getcolor() {
     if(this.userStatus==='online'){
         return 'green';
     }
     return 'red';
 }
}