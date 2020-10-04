import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './ajax.service';

import { NavigationComponent } from './navigation/navigation.component';
import { GlobalfeedComponent } from './globalfeed/globalfeed.component';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationComponent,
    GlobalfeedComponent,
    CommentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }