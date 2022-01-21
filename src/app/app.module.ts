import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { AppLoginComponent } from './app-login/app-login.component'

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
