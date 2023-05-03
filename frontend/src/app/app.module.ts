import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Angular4PaystackModule } from 'angular4-paystack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpsInterceptor } from './https.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { LogoutComponent } from './logout/logout.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MaterialModule } from './material.module'
import { ResourcesComponent } from './resources/resources.component';
import { GetResourcesComponent } from './get-resources/get-resources.component';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    SideNavComponent,
    MyCoursesComponent,
    AllCoursesComponent,
    SnackBarComponent,
    LogoutComponent,
    BottomsheetComponent,
    ResourcesComponent,
    GetResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    LayoutModule, 
    MaterialModule,
    MatProgressBarModule,
    Angular4PaystackModule.forRoot('pk_test_c5a93f43e545af004f5a9f5a22bdcd7d949c41a8'),
   ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
