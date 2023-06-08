import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  reference = '';
  public titles = ''
  constructor(public userService: UserService) { }
  public courseArray: any = [];
  public courses = [];
  public course = [];
  public title = '';
  public desc = '';
  public amount = '';
  public date = '';
  public file = '';
  public user_id = '';
  public course_id = '';
  public id: number = 0;
  public seen = false;
  public path = environment.fileUrl;
  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any,course:any) {
      this.titles = 'Payment successfull';
      console.log(this.titles, this.reference);
      const form = new FormData();
    // form.append("user_id", this.user_id);
    form.append("course_id", course.course_id);
    form.append("amount", course.amount);
    form.append("reference", course.reference);
    const data = {
      'course_id': course.course_id,
      'amount': course.amount,
      'reference': course.reference
    }
    this.userService.savePayment(form).subscribe(data=>{
    })
     
  }

  paymentCancel() {
    this.titles = 'Payment Failed';
    console.log('payment failed');
  }

  ngOnInit(): void {
    this.reference = `ref-${ Math.floor(Math.random() * 19e10)}`;
    // this.getAllCourses();
    this.userService.getAllCourses().subscribe(info => {
      this.courseArray = info;
      this.courseArray.map((c:any)=>{
        // generatingauniquereferencenumberforeachcourse
        let d = new Date();
        c['reference']=`${ Math.floor(Math.random() * 19e10)}-${d.getTime()}`
      })
    })

    this.userService.userDetails.subscribe(data => {
      this.user_id = data.user_id
      localStorage.setItem('current_user',JSON.stringify(this.user_id))
      // gettingallcourses
    })
  }


  // getAllCourses() {
  //   this.userService.userDetails.subscribe(data => {
  //     console.log(data.user_id)
  //     this.user_id = data.user_id
  //     this.userService.getAllCourses(data.user_id).subscribe(info => {
  //       this.courseArray = info
  //       console.log(this.courseArray)
  //     })
  //     console.log(data)
  //   })

  // }
 
}
