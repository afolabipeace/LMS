import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MaterialModule } from './material.module'

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
    MatButtonModule,
    LayoutModule, 
    MaterialModule
   ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
