import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ajax: AjaxService) { }

  ngOnInit(): void {
    // this.ajax.addUser().subscribe(); //don't leave this here!!! --J.S(Controlla)
  }

}
