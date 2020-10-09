import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { UserService } from '../service/user.service';

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
 
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }
 

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
      });
    this.userService.getAllUsers().subscribe(data =>{
        this.existingUsers = data;
        console.log(this.existingUsers)
      });
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
               
                this.userService.loginUser(this.existingUsers[i]).subscribe();
                this.router.navigateByUrl('/personalpage');
        }else{
          this.incorrect=true;
        }
      }if(this.incorrect){
          this.form.reset();
        }
  
      
  }
  
}
   