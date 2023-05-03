import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
// interface Food {
//   value: string;
//   viewValue: string;
// }
export class MyCoursesComponent implements OnInit {

  constructor(public userService:UserService, public formBuilder:FormBuilder,public snackbar:MatSnackBar, public router: Router) { }
  public userForm = this.formBuilder.group({
    title: [''],
    desc: [''],
    status: [''],
    amount: [''],
})
  public studentArray = [];
  public incorrect= "";
  
  // public courseStatus= "";
  coursefile=null;
  // public file = '';

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];
  ngOnInit(): void {
  }
  onFileChange(e:any){
    this.coursefile=e.target.files[0];
    // console.log(this.status)
  }
  create(){
    let {title, desc, status,amount} = this.userForm.value;
    if (title == "" && desc == "" && status == "" && amount == "") {
      this.incorrect = "Pls provide the neccessary details!!!."
    }else{
    const form = new FormData();
    form.append("title", title ?? "");
    form.append("desc", desc ?? "");
    form.append("status", status ?? "");
    form.append("amount", amount ?? "");
    this.userService.createCourses(form).subscribe(response => { 
      console.log(response);
      if (response.success == true) {
        this.snackbar.openFromComponent(SnackBarComponent, {
          data: {message: "Course sucessfully Created"},
          duration: 3000
        })
          console.log(status)
        this.userForm.controls['title'].setValue("");
        this.userForm.controls['desc'].setValue("");
        this.userForm.controls['status'].setValue("");
        this.userForm.controls['amount'].setValue("");
        this.router.navigate(['/home']);
      } else {
        this.snackbar.openFromComponent(SnackBarComponent, {
          data: {message: "Unable to create course"},
          duration: 3000
        })        
      }
    })
  }
  }

  // getCourses() {
  //   this.userService.getCourses().subscribe(data => {
  //     this.course = data.title;
  //     console.log(data)
  //     // this.detailsOfUser = this.userService;
  //   })
  // }




    // let userRes = this.userForm.value;
    // this.userService.userCourses(userRes).subscribe(data =>{
    //   console.log(data)
    //   if(data.success == true){
    //     localStorage.setItem(('studentArray'), data)
    //     this.incorrect = data.success
    //     this.router.navigate(['/signin']);
    //   }else{
        
    //   }
    // })

}
