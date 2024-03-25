import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PeopleComponent } from './people/people.component';
import { FilesComponent } from './files/files.component';
import { authGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'home', component : HomeComponent, canActivate:[authGuard]},
  { path : 'my-info', component : MyInfoComponent,canActivate:[authGuard]},
  { path : 'people', component : PeopleComponent,canActivate:[authGuard]},
  { path : 'files', component : FilesComponent,canActivate:[authGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
