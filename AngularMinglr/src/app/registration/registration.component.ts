import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  test = ''
  password = '';
  username = '';
  existingUsers: any;

  onSubmit(){
    console.log("in onSubmit");
    this.userService.addUser();
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
  }

}
