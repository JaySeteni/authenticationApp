import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { AdminComponent } from './comps/admin/admin.component';

const routes: Routes = [
  { path: 'dashboard', component: NavbarComponent },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

