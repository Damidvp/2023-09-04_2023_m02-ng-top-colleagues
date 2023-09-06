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
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance2:Colleague = {
  pseudo: "cheb_geek",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance3:Colleague = {
  pseudo: "pepino_ronso",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance4:Colleague = {
  pseudo: "lap_hiner",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance5:Colleague = {
  pseudo: "spaghetti_joe",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance6:Colleague = {
  pseudo: "sula_cronim",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance7:Colleague = {
  pseudo: "ava_stonsen",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance8:Colleague = {
  pseudo: "giiu_ehra",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleagueInstance9:Colleague = {
  pseudo: "esteroth_moonshine",
  score: 500,
  photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
};
colleguesListe:Array<Colleague> = [this.colleagueInstance1, this.colleagueInstance2, this.colleagueInstance3,
    this.colleagueInstance4, this.colleagueInstance5, this.colleagueInstance6, this.colleagueInstance7,
    this.colleagueInstance8, this.colleagueInstance9];

}
