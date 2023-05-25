import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = environment.baseUrl
  constructor(public httpClient: HttpClient, public router:Router) { }
  
  // public courseId = new BehaviorSubject(String);

  public userDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  setUserDetails = (details: any) => this.userDetails.next(details);

  public courseDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  setCourseDetails = (details: any) => this.courseDetails.next(details);

  getUser = ()=> this.httpClient.get(`${environment.baseUrl}`);

  getToken =() => localStorage.getItem('token');

  logout = () => {
    localStorage.removeItem("token")
    this.router.navigate(['/signin'])
    localStorage.removeItem("token")
  }

  public signupUsers (userObj:any){
    return this.httpClient.post<any>(`${this.baseUrl}/userSignup.php`,userObj)
  }

  public signinUsers (userObj:any){
    return this.httpClient.post<any>(`${this.baseUrl}/userSignin.php`,userObj)
  }

  public createCourses(userCou:any){
    return this.httpClient.post<any>(`${this.baseUrl}/createCourses.php`, userCou)
  }

  public createResources(userRes:any){
    return this.httpClient.post<any>(`${this.baseUrl}/createResources.php`, userRes)
  }

  public getAllUser (){
    return this.httpClient.get<any>(`${this.baseUrl}/dashboard.php`)
  }

  public getCourses (user_id:any){
    return this.httpClient.post<any>(`${this.baseUrl}/getCourse.php`, {user_id})
  }

  public getPaymentHistory (){
    return this.httpClient.get<any>(`${this.baseUrl}/getPaymentHistory.php`)
  }

  public savePayment (form:any){
    return this.httpClient.post<any>(`${this.baseUrl}/savePayment.php`,form)
  }

  public getResources (course_id:any){
    return this.httpClient.post<any>(`${this.baseUrl}/getResources.php`, {course_id})
  }

  // public getCourse (){
  //   return this.httpClient.get<any>(`${this.baseUrl}/getCourses.php`)
  // }

  // public getCourse (){
  //   return this.httpClient.post<any>(`${this.baseUrl}/getCourses.php`);
  // }

  public getAllCourses (){
    return this.httpClient.get<any>(`${this.baseUrl}/getAllCourses.php`)
  }

  public getOwnerPaymentHistory (course_id:any){
    return this.httpClient.post<any>(`${this.baseUrl}/getOwnerPaymentHistory.php`,{course_id})
  }

  // public OwnerPaymentHistory (course_id:any){
  //   return this.httpClient.get<any>(`${this.baseUrl}/getOwnerPaymentHistory.php`)
  // }

  
}
