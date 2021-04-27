import { Component, OnInit } from '@angular/core';
import { Kolor } from 'src/app/models/kolor';
import { KolorService } from 'src/app/services/kolor.service';

@Component({
  selector: 'app-kolor',
  templateUrl: './kolor.component.html',
  styleUrls: ['./kolor.component.css']
})
export class KolorComponent implements OnInit {
  colors: Kolor[] = [];
  dataLoaded = false;

  constructor(private kolorService: KolorService) { }

  ngOnInit(): void {
    this.getKolors();
  }
  getKolors() {
    throw new Error('Method not implemented.');
  }

  getColors() {
    this.kolorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

}