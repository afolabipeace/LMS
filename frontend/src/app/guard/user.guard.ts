import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
// import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {
  constructor(public router:Router,public userService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let getUserDetails = JSON.parse(localStorage.getItem('token'),)
      // if (getUserDetails.status == "User") {
      //   return true;
      // } else {
      //   this.router.navigate(["/dashboard"]);
      // }
      return new Promise((resolve,reject)=>{
        this.userService.getAllUser().subscribe({
          next: (data:any) => {
          if(data.true){
            this.userService.setUserDetails(data.fetched);
            resolve(true);
          }else if(data.unauthorized){
            this.router.navigate (['./signin'])
          }  
        }, error: (err:any) => {
          reject(err)
        }})
      });
  }
  
}

// Promise((resolve, reject) => {
//   this._auth.getUser().subscribe({
//     next:(data:any)=>{
//       data.data && this._auth.setUserDetails(data.data);
//       resolve(true);
//     },error: (err: any) =>{
//       reject(err)
//     }
//   })
// })
