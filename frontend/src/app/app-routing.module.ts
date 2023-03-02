import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGuard } from './guard/user.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'signup', pathMatch:'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', canActivate:[UserGuard], component:SideNavComponent, children:[
    {path:'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'logout', component: LogoutComponent},
  {path:'mycourse', component: MyCoursesComponent},
  {path:'allcourse', component: AllCoursesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
