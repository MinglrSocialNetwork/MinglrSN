import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  existingUsers: any;
  incorrect: boolean;
  currentUser: any;
 
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }
 

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
      });
    this.userService.getAllUsers().subscribe(data =>{
        this.existingUsers = data;
        // console.log(this.existingUsers)
      });
    this.authService.logout();
    }
  
 

  get loginFormParams(){
    return this.form.controls;
  }
  onSubmit(){
    this.incorrect = false;
    this.submitted = true;
    
    for (var i=0; i < this.existingUsers.length; i++) {  
        if (this.loginFormParams.username.value == this.existingUsers[i].userName
              && this.loginFormParams.password.value == this.existingUsers[i].password  ){
               
               // console.log(this.existingUsers[i]);
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token',JSON.stringify(this.existingUsers[i]));
                var currentUser = JSON.parse(localStorage.getItem('token'));
                // console.log(currentUser['userName']);
                // console.log(currentUser['id']);
                // console.log(currentUser)
                //console.log(localStorage.getItem('token'));
                // this.userService.loginUser(this.existingUsers[i]).subscribe(data =>{
                //   this.currentUser = data;}
                //   )
                  this.router.navigateByUrl('/personalpage');
        }else{
          this.incorrect=true;
        }
      }if(this.incorrect){
          this.form.reset();
        }
  }
}