import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  constructor(public userService:UserService ) {}
  public payment:any = [];
  public message = '';
  ngOnInit(): void {
    this.getPaymentHistory();
  }

  getPaymentHistory() {
      this.userService.getPaymentHistory().subscribe(info => {
        if(info.message){
          this.message =`No Payment History CLICK TO GO BACK TO COURSE`
        }else{
          this.payment = info
        }
        localStorage.setItem('payment', JSON.stringify(this.payment));
    })
}

}
