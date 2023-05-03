import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
// import { MatLabelModule } from '@angular/material/';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatSnackBarModule,

  ],
  exports:[
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    // MatLabelModule,
    MatOptionModule,
    MatSnackBarModule,

  ]
})
export class MaterialModule { }
