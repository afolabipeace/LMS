import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(public userService:UserService, public formBuilder:FormBuilder,public snackbar:MatSnackBar, public router: Router,public actRoute:ActivatedRoute) { }
//   public userForm = this.formBuilder.group({
//     type: [''],
//     name: [''],
//     course_id: [''],
//     file: [''],
// })
public type = "";
public name = "";
public course_id = "";
public file = "";
public uploadFile = new FormData;
public studentArray = [];
public incorrect= "";

  ngOnInit(): void {
    let id=this.actRoute.snapshot.params['id']
    this.userService.userDetails.subscribe(data => {
      this.studentArray = data;
      this.userService.getCourses(data.user_id).subscribe(info => {
        this.studentArray = info
        console.log(this.studentArray)
      })
    })
    this.course_id=(id)
  }

  onFileChange(event:any) {
    this.file = event.target.files[0];
  }

  createResources(){
    // alert('nuinbib')
    console.log(this.file);
    console.log(this.name);
    console.log(this.type);
    console.log(this.course_id);
    // let {type,name, file} = this.userForm.value;
    if (this.type == "" ) {
      this.incorrect = "Pls provide the neccessary details!!!."
    }else{
    // const form = new FormData();
    // form.append("type", type ?? "");
    // form.append("name", name ?? "");
    // form.append("file", this.coursefile??"");

    this.uploadFile.append('file', this.file);
      this.uploadFile.append('name', this.name);
      this.uploadFile.append('type', this.type);
      this.uploadFile.append('course_id', this.course_id);
    this.userService.createResources(this.uploadFile).subscribe(data => { 
      console.log('entered')
      console.log(data);
      if (data.success == true) {
        this.snackbar.openFromComponent(SnackBarComponent, {
          data: {message: "Resources sucessfully Created"},
          duration: 3000
        })
        this.type = "";
        this.name = "";
        this.course_id = "";
        this.router.navigate(['/resources']);
      } else {
        this.snackbar.openFromComponent(SnackBarComponent, {
          data: {message: "Unable to create resources"},
          duration: 3000
        })        
      }
    })
  }
  }


}
