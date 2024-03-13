import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { MyInfoComponent } from './my-info/my-info.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'home', component : HomeComponent},
  { path : 'my-info', component : MyInfoComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
