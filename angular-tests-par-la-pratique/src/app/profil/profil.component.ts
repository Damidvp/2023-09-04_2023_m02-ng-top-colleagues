import { Personne } from './../personne';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() personne: Personne | undefined;
  @Output() avis = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  donnerAvis(avis:boolean){
    this.avis.emit(avis);
  }

}
