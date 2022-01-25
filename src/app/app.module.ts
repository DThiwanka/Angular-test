import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { Test1Component } from './test1/test1.component';
import { IfelsecheckComponent } from './ifelsecheck/ifelsecheck.component';
import { CompofloopComponent } from './compofloop/compofloop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component'

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    Test1Component,
    IfelsecheckComponent,
    CompofloopComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
