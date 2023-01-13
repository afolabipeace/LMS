import { Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  

  /** Based on the screen size, switch from standard to one column per row */
//   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//     map(({ matches }) => {
//       if (matches) {
//         return [
//           { title: 'Card 1', cols: 1, rows: 1 },
//           { title: 'Card 2', cols: 1, rows: 1 },
//           { title: 'Card 3', cols: 1, rows: 1 },
//           { title: 'Card 4', cols: 1, rows: 1 }
//         ];
//       }

//       return [
//         { title: 'Card 1', cols: 2, rows: 1 },
//         { title: 'Card 2', cols: 1, rows: 1 },
//         { title: 'Card 3', cols: 1, rows: 2 },
//         { title: 'Card 4', cols: 1, rows: 1 }
//       ];
//     })
//   );





  constructor(private breakpointObserver: BreakpointObserver, public userService: UserService) {}

  public name = "";
  public names = "";
  public courses:any= [];

  ngOnInit() : void{
    this.getAllUser();
  }
  getAllUser() {
    this.userService.userDetails.subscribe(data => {
      this.name = data.first_name;
      this.names = data.last_name;
      // this.detailsOfUser = this.userService;
    })
    this.getCourses()
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
