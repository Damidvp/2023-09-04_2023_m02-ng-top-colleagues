import { CompteurService } from './../compteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit{
  nb = 0;

  constructor(private compteurSrv: CompteurService){}

  ngOnInit(){
    this.nb = this.compteurSrv.incrementer();
  }

  incrementer() {
    this.nb = this.compteurSrv.incrementer();
  }
}
