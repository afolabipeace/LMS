import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay} from 'rxjs/operators';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public userService:UserService) { }
  public width = 0;
  public name = "";
  public names = "";

  ngOnInit(): void {
    window.addEventListener("resize", ()=>{
      this.width = window.innerWidth;
    })
    this.getAllUser();

  } 
  getAllUser() {
    this.userService.userDetails.subscribe(data => {
      this.name = data.first_name;
      this.names = data.last_name;
      // this.detailsOfUser = this.userService;
    })
  }

}
