import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reference = '';
    constructor(public actRoute: ActivatedRoute,public userService: UserService) { }
    public title = ''
    public course_id = ''
    public seen = false;
    public courseArray = [];

    paymentInit() {
      console.log('Payment initialized');
    }

    paymentDone(ref: any) {
      this.title = 'Payment successfull';
      console.log(this.title, ref);
    }

    paymentCancel() {
      console.log('payment failed');
    }

    public courses:any= [];
    public path=environment.fileUrl;
  ngOnInit(): void {
    // this.course_id = this.actRoute.snapshot.params['course_id'];
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.getCourses();
    console.log(this.course_id)
  }

  getCourses() {
      this.userService.userDetails.subscribe(data=>{
        console.log(data.user_id)
        this.userService.getCourses(data.user_id).subscribe(info => {
          this.courses = info
          console.log(this.courses)
          // console.log(this.courses.title)
        })
      console.log(data)
      // this.detailsOfUser = this.userService;
      })
  }

  paymentHistory(course_id:any){
    console.log(course_id)
    this.userService.getOwnerPaymentHistory(course_id).subscribe(data => {
      console.log(data, "data");
      if (data.message != "No Payment History") {
        this.seen = true;
        this.courseArray = data;
      } else {
        this.seen = false;
      }
    })
  }


}
