import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { Test1Component } from './test1/test1.component';
import { IfelsecheckComponent } from './ifelsecheck/ifelsecheck.component';
import { CompofloopComponent } from './compofloop/compofloop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { AngularFormComponent } from './angular-form/angular-form.component'
import{ FormsModule } from '@angular/forms';
import { ToggleelementComponent } from './toggleelement/toggleelement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootsrapcompComponent } from './bootsrapcomp/bootsrapcomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialsetComponent } from './meterialset/meterialset.component'
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import { TodocompComponent } from './todocomp/todocomp.component';
import { ChildComponent } from './child/child.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    Test1Component,
    IfelsecheckComponent,
    CompofloopComponent,
    StyleBindingComponent,
    HeaderComponent,
    AngularFormComponent,
    ToggleelementComponent,
    BootsrapcompComponent,
    MeterialsetComponent,
    TodocompComponent,
    ChildComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

