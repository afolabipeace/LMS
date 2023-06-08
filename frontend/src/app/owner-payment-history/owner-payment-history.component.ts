import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-owner-payment-history',
  templateUrl: './owner-payment-history.component.html',
  styleUrls: ['./owner-payment-history.component.css']
})
export class OwnerPaymentHistoryComponent implements OnInit {

  constructor(public actRoute:ActivatedRoute,public userService:UserService) { }
  public course_id = '';
  public history:any = '';
  public message = '';

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id']
    this.course_id=(id)
    this.OwnerPaymentResources();
  }

  OwnerPaymentResources(){
    this.userService.getOwnerPaymentHistory(this.course_id).subscribe(data => {
      if(data.message){
        this.message =`No Payment History CLICK TO GO BACK TO COURSE`
      }else{
        this.history = data
      }
      localStorage.setItem('payment', JSON.stringify(this.history));
    })


  }

}
