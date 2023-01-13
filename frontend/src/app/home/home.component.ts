import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public userService: UserService) { }
    public courses:any= [];
    public path=environment.fileUrl;
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
      this.userService.userDetails.subscribe(data=>{
        console.log(data.user_id)
        this.userService.getCourses(data.user_id).subscribe(info => {
          this.courses = info
          console.log(this.courses)
        })
      console.log(data)
      // this.detailsOfUser = this.userService;
      })
  }


}
