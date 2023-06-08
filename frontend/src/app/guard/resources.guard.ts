import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesGuard implements CanActivate {
  constructor(public userService:UserService,public router:Router){}
  public index = '';
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const routeId = route.params
      // console.log(route.params)
      this.userService.getAllCourses().subscribe((data:any) => {
        let findCourse = data.find((each:any) => each.course_id == route.params['id'] );
        if (!findCourse) {
           this.router.navigate(['/allcourse'])
        }else {
          let user = JSON.parse(localStorage.getItem("current_user")!)
          if (findCourse.status == 'paid' && findCourse.paid == false && findCourse.user_id != user){
            this.router.navigate(['/allcourse'])
          }
            // return false;
        }
      })
      // console.log("hi");
    return true;
  }
  
}
