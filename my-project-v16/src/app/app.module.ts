import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from "./_material/material.module";
// import { MyInfoComponent } from './my-info/my-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesComponent } from './files/files.component';
import { PeopleComponent } from './people/people.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './_models/add-employee/add-employee.component';
import { ConfirmModelComponent } from './_models/confirm-model/confirm-model.component';
import { SuccessModelComponent } from './_models/success-model/success-model.component';
// import { LeavesComponent } from './my-info/leaves/leaves.component';
// import { PayInfoComponent } from './my-info/pay-info/pay-info.component';
// import { BenefitsComponent } from './my-info/benefits/benefits.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NavBarComponent,
    // MyInfoComponent,
    FilesComponent,
    PeopleComponent,
    AddEmployeeComponent,
    ConfirmModelComponent,
    SuccessModelComponent,
    // LeavesComponent,
    // PayInfoComponent,
    // BenefitsComponent,
    // PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ provideAnimations()],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
