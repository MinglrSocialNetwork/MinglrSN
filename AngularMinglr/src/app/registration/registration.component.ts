import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }
  @ViewChild('registration') registration:any;

  test = '';
  password = '';
  username = '';
  existingUsers: any;

  //Val Password
  usernameVal: boolean;
  passwordVal: boolean;

  onChange(value){
    // console.log("in onChange");
    this.test = value;
    if(value == this.password){
      this.passwordVal = true;

      console.log("passwords match "+  this.passwordVal);
    }else{
      this.passwordVal = false;
      console.log("passwords dont match " + this.passwordVal);

    }
  }

  getUsername(name){
    this.username = name;
    console.log(this.username);
    for(var i=0; i < this.existingUsers.length; i++){
      if(this.username == this.existingUsers[i].userName){
        this.usernameVal = false;
        console.log("user exists "+this.usernameVal);

      }else{
        this.usernameVal = true;
      }
    }
  }

  getPassword(value){
    this.password = value;
  }

  onSubmit(){
    console.log("in onSubmit");
    console.log("usernameVal "+this.usernameVal +" passwordVal "+ this.passwordVal);
    this.userService.addUser(this.registration.value).subscribe(data =>{
      this.existingUsers = data;
      console.log(this.existingUsers)
    });
    console.log("out of onSubmit");
    this.registration.reset();  
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data =>{
      this.existingUsers = data;
      console.log(this.existingUsers)
    });
  }

}
