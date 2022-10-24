import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})

export class AppComponent {
  gumbVrijednost = true;
  prikazTablice = false;
  vrijemePocetka = "";
  vrijemeKraja = "";
  datumPocetni = new Date();
  datumZavrsni = new Date();
  constructor(public dialog: MatDialog){
  }

  openDialog(){
    this.gumbVrijednost = true;
    const rezultat = this.vratiVrijeme();
    this.vrijemeKraja = rezultat[0];
    this.datumZavrsni = rezultat[1];
    this.dialog.open(PopupComponent, {
      data:{
        dP:this.datumPocetni,
        dZ:this.datumZavrsni
      }
    });
  }

  click(){
      this.gumbVrijednost = false
      const rezultat = this.vratiVrijeme();
      this.vrijemePocetka = rezultat[0];
      this.datumPocetni = rezultat[1];
      this.prikazTablice = true;
  }

  vratiVrijeme(){
      var datum = new Date();
      var dan = datum .getDate();
      var mjesec = datum .getMonth();
      var godina = datum .getFullYear();
      var sati = datum .getHours();
      var minute = datum .getMinutes();
      return  [`${dan}.${mjesec + 1}.${godina} ${sati}:${minute}`,datum] as const;
  }
}
