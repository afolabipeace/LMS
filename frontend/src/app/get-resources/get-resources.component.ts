import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-get-resources',
  templateUrl: './get-resources.component.html',
  styleUrls: ['./get-resources.component.css']
})
export class GetResourcesComponent implements OnInit {

  constructor(public userService: UserService, public actRoute: ActivatedRoute) { }
  public resources: any = [];
  public course_id = '';
  public message = '';
  public seen = false;
  public path = environment.fileUrl;
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id']
    this.course_id=(id)
    
    this.getCourseResources();
    this.message = ''
  }

  getCourseResources() {
      this.userService.getResources(this.course_id).subscribe(data => {
      console.log(data)
      if(data.message){
        this.message =`No Resources Created CLICK TO Add Resources`
      }else{
        this.resources = data
      }
      localStorage.setItem('data', JSON.stringify(this.resources));
      console.log(this.resources,"resources")

      
      // if (data.message != 'no Resources Created') {
      //   this.seen = true
      //   this.resources = data
      //   console.log(this.resources)
      // } else {
      //   this.seen = false
      // }
    })
    

   
      
  }



}
