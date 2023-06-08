import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetResourcesComponent } from './get-resources/get-resources.component';
import { UserGuard } from './guard/user.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ResourcesComponent } from './resources/resources.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
// import { MakePaymentComponent } from './make-payment/make-payment.component';
import { OwnerPaymentHistoryComponent } from './owner-payment-history/owner-payment-history.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
// import { ResourcesGuardGuard } from './resources-guard.guard';
import { ResourcesGuard } from './guard/resources.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    
    path: '', canActivate: [UserGuard], component: SideNavComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard], },
      { path: 'createCourses', component: MyCoursesComponent, canActivate: [UserGuard], },
      { path: 'logout', component: LogoutComponent, canActivate: [UserGuard], },
      {
        path: 'resources', children: [
          { path: '', component: HomeComponent },
          { path: 'resources/:id', component: ResourcesComponent },
          { path: 'getResources/:id', component: GetResourcesComponent,canActivate:[ResourcesGuard] },
          { path: 'payment/:id', component: OwnerPaymentHistoryComponent },
        ]
      },
      {path: 'allcourse', children: [
          { path: '', component: AllCoursesComponent },
          { path: 'getResources/:id', component:GetResourcesComponent, canActivate:[ResourcesGuard]},
      ]},
      { path: 'paymentHistory', component: PaymentHistoryComponent },
      // { path: 'payment', component: MakePaymentComponent },
      { path: '**', component: NotFoundComponent},
    ],
  },
];

// {path:'details',children:[
//   {path:'',component:BudgetViewComponent},
//   {path:'details/:id',component:BudgetListComponent}
// ],canActivate:[BudgetGuard]},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }