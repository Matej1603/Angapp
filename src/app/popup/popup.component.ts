import { Component, OnInit,Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  prvi = new Date();
  zadnji = new Date();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.zadnji = data.dZ;
    this.prvi = data.dP;
  }
  ngOnInit(): void {

  }
}
