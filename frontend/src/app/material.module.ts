import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule,

  ]
})
export class MaterialModule { }
