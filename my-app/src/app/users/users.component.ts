import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowNewUser=false;
  userCreatedstatus='no user is created';
  userName='test user';
  isUserCreated = false;
  users=['user1','user2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewUser=true;
    },3000)
  }
  changeuserCreatedstatus(){
    this.isUserCreated=true;
    this.userCreatedstatus='user is created';
    this.users.push(this.userName);
  }
  onUpdateUser(event: Event) {
   this.userName=(event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}