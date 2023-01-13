import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  constructor(public userService:UserService) { }
  public courseArray:any =[];
  public courses =[];
  public course =[];
  public title ='';
  public desc ='';
  public file ='';
  public id:number =0;
  public seen =false;
  public path=environment.fileUrl;

  ngOnInit(): void {
    this.getAllCourses();
  //   this.userService.getAllCourses().subscribe(data => {
  //     console.log(data);
  //   this.courses = data;
  //   this.seen = true;
  // })
  }


  getAllCourses() {
    this.userService.userDetails.subscribe(data=>{
      // console.log(data.user_id)
      this.userService.getAllCourses(data.user_id).subscribe(info => {
        this.courseArray = info
        console.log(this.courseArray)
      })
    console.log(data)
    })


    // this.userService.userDetails.subscribe(data=>{
    //   this.id=data.user_id
    //   this.userService.getAllCourses(data.user_id).subscribe(info => {
    //     this.courseArray=info
    //     this.courseArray.map((item:any,index:any)=>{
    //       if(index===this.id){
    //         item.title=this.title
    //         item.desc=this.desc
    //         item.file=this.file
            
    //       }
    //       console.log(item.title)
    //       console.log(item.desc)
    //       console.log(item.file)
    //     })
    //   })
    // })
}
}
