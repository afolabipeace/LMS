import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router :Router,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  logout = () => {
    localStorage.removeItem("token")
    this.router.navigate(['/signin'])
    // localStorage.removeItem("token")
    this.snackbar.openFromComponent(SnackBarComponent, {
      data: {message: "Logout Successfully"},
      duration: 3000
    })
  }


}
