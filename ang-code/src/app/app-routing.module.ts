import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//import { AboutComponent } from './about/about.component';
//import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent , canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
