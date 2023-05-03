import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'
import { SnackBarComponent } from '../snack-bar/snack-bar.component';;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( public  router: Router, public userService: UserService, public snackbar: MatSnackBar) { }

  public email = ''
  public password = ''
  public usersArray:any = [];
  public incorrect ='';
  public progressBar:any = false;
  
  ngOnInit(): void {
   
  }

  signIn (){
    if ((this.email == "" && this.password == "") || (this.email != "" && this.password == "") ) {
      this.progressBar = true;
      this.incorrect = "Pls provide the neccessary details!!!."
    } else {
      let obj = {email: this.email, password: this.password};
      this.userService.signinUsers(obj).subscribe(data => {
        this.progressBar = true;
        if(this.email!=data.email && this.password!=data.password){
          this.incorrect = "Check your details!!!."
        }
        else if (data.userDetails == true) {
        this.progressBar = true;

          this.snackbar.openFromComponent(SnackBarComponent, {
            data: {message: "Signed In Sucessfully"},
            duration: 3000
          })
          localStorage.setItem('token',data.token);
          // this.progressBar = false;
          console.log(data.token)
          // let obj = {
          //   email: data.details.email, 
          //   password: data.details.password
          // };
          // localStorage.setItem("token", JSON.stringify(obj));
          // localStorage.setItem("userFirstName", JSON.stringify(data.firstName));
          this.router.navigate(["/dashboard"]);
        } else {
          this.incorrect = data.message;
        }
      })
    }




    // let userObj = {email:this.email, password:this.password};
    // this.userService.signinUsers(userObj).subscribe(data =>{
    //   console.log(data)
    //   if(data.success==true){
    //     localStorage.setItem('users_jwt', data.jwt)
    //     // localStorage['users_jwt'] = data.jwt;
    //     this.router.navigate(['/dashboard']);
    //     console.log(data);
    //   }

    // })
  }

    //  this.usersArray = this.contactService.getUsers();
    // let users = this.usersArray.find((user:any)=>user.email == this.email && user.password == this.password)
    // if(users){
    //   localStorage.setItem('contactUser', JSON.stringify(users));
    //   this.router.navigate(['/contact-app'])
    // }else{
    //   this.router.navigate(['/signup'])
    // }

}
