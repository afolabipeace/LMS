import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reference = '';
    constructor(public userService: UserService) { }
    public title = ''

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
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.getCourses();
  }

  getCourses() {
      this.userService.userDetails.subscribe(data=>{
        console.log(data.user_id)
        this.userService.getCourses(data.user_id).subscribe(info => {
          this.courses = info
          console.log(this.courses)
          console.log(this.courses.title)
        })
      console.log(data)
      // this.detailsOfUser = this.userService;
      })
  }


}
