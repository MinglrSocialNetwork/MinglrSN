import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './ajax.service';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalfeedComponent } from './globalfeed/globalfeed.component';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';

import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    GlobalfeedComponent,
    CommentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

