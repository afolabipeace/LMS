import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router, public snackbar: MatSnackBar) { }
  public userForm = this.formBuilder.group({
    first_name: [''],
    last_name: [''],
    password: [''],
    phone_no: [''],
    address: [''],
    email: [''],
  })

  public message = '';
  public studentArray = [];
  public incorrect = '';
  public progressBar:any = false;
  ngOnInit(): void {
  }
  signUp() {
    // console.log(this.userForm.value);
    // let checkExist = this.studentArray.findIndex((student: any) => student.email == this.userForm.value['email'])
    // this.userService.signupUsers(student).subscribe(data => {
    // let user = this.userForm.value
    // this.userService.signupUsers(userObj).subscribe(data => {
    // if (data.email == userObj['email']) {
    //   this.snackbar.openFromComponent(SnackBarComponent, {
    //     data: { message: "Email Already Exist" },
    //     duration: 3000
    //   })
    // }

    // else {
    let userObj = this.userForm.value;
    if ((userObj.first_name == "" && userObj.password == "" && userObj.email == "" && userObj.last_name == "" && userObj.address == "" && userObj.phone_no == "")) {
      this.progressBar = true;
      this.incorrect = "Pls provide the neccessary details!!!."
    } else {
      this.userService.signupUsers(userObj).subscribe(data => {
        this.progressBar = true;
        console.log(data)
        if (data.email == userObj['email']) {
          this.snackbar.openFromComponent(SnackBarComponent, {
            data: { message: "Email Already Exist" },
            duration: 3000
          })
        } else {
          if (data.success == true) {
            this.progressBar = true;
            this.snackbar.openFromComponent(SnackBarComponent, {
              data: { message: "Account Created Sucessfully" },
              duration: 3000
            })
            localStorage.setItem(('studentArray'), data)
            this.router.navigate(['/signin']);
          } else {
            alert('noo')
          }
        }

      })
    }
    // }
    // })
  }

  // this.signupService.signupUsers(userObj).subscribe(data =>{
  //   if(data.success==true){
  //     this.router.navigate(['/signin']);
  //   }else{

  //   }
  // })

}
