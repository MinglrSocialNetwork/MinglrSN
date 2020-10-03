import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {

   }
 

  test = ''
  password = '';
  username = '';
  existingUsers: any;

  onSubmit(){
    console.log("in onSubmit");
  //  this.userService.addUser();
  }

  onChange(value){
    // console.log("in onChange");
    this.test = value;
    if(value == this.password){
      console.log("passwords match")
    }
  }

  getUsername(name){
    this.username = name;
    console.log(this.username);
    for(var i=0; i < this.existingUsers.length; i++){
      if(this.username == this.existingUsers[i].userName){
        console.log("user exists");
      }
    }
  }

  getPassword(value){
    this.password = value;
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data =>{
      this.existingUsers = data;
    });
    console.log("Login")
  }
}
