import { Component } from '@angular/core';
import { Colleague } from '../../../models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})

export class ColleagueListComponent {

 //Collègues fictifs
 colleagueInstance1:Colleague = {
  pseudo: "arno_camoa",
  score: 500,
  photo: "unephoto"
};
colleagueInstance2:Colleague = {
  pseudo: "cheb_geek",
  score: 500,
  photo: "unephoto"
};
colleagueInstance3:Colleague = {
  pseudo: "pepino_ronso",
  score: 500,
  photo: "unephoto"
};
colleagueInstance4:Colleague = {
  pseudo: "lap_hiner",
  score: 500,
  photo: "unephoto"
};
colleagueInstance5:Colleague = {
  pseudo: "spaghetti_joe",
  score: 500,
  photo: "unephoto"
};
colleagueInstance6:Colleague = {
  pseudo: "sula_cronim",
  score: 500,
  photo: "unephoto"
};
colleagueInstance7:Colleague = {
  pseudo: "ava_stonsen",
  score: 500,
  photo: "unephoto"
};
colleagueInstance8:Colleague = {
  pseudo: "giiu_ehra",
  score: 500,
  photo: "unephoto"
};
colleagueInstance9:Colleague = {
  pseudo: "esteroth_moonshine",
  score: 500,
  photo: "unephoto"
};
colleguesListe:Array<Colleague> = [this.colleagueInstance1, this.colleagueInstance2, this.colleagueInstance3,
    this.colleagueInstance4, this.colleagueInstance5, this.colleagueInstance6, this.colleagueInstance7,
    this.colleagueInstance8, this.colleagueInstance9];

}
