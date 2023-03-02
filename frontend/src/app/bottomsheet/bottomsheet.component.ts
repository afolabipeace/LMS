import { Component,Inject, OnInit } from '@angular/core';

import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {message: string}, public bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>) { }

  ngOnInit(): void {
  }
  closeBottomSheetYes() {
    this.bottomSheetRef.dismiss(true);
  }

  closeBottomSheetNO() {
    this.bottomSheetRef.dismiss(false);
  }

}
