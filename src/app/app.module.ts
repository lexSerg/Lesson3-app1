import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './enithy/components/users/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './enithy/components/home/home.component';
import { UserPrevewComponent } from './enithy/components/users/user-prevew/user-prevew.component';
import { FullUserComponent } from './enithy/components/users/full-user/full-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    HomeComponent,
    UserPrevewComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
