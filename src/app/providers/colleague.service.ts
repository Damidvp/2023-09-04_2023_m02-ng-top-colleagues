import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  listOfColleagues(): Colleague[] {
    //Collègues fictifs
    const colleagueInstance1: Colleague = {
      pseudo: "arno_camoa",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance2: Colleague = {
      pseudo: "cheb_geek",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance3: Colleague = {
      pseudo: "pepino_ronso",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance4: Colleague = {
      pseudo: "lap_hiner",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance5: Colleague = {
      pseudo: "spaghetti_joe",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance6: Colleague = {
      pseudo: "sula_cronim",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance7: Colleague = {
      pseudo: "ava_stonsen",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance8: Colleague = {
      pseudo: "giiu_ehra",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleagueInstance9: Colleague = {
      pseudo: "esteroth_moonshine",
      score: 500,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    };
    const colleguesListe: Array<Colleague> = [colleagueInstance1, colleagueInstance2, colleagueInstance3,
      colleagueInstance4, colleagueInstance5, colleagueInstance6, colleagueInstance7,
      colleagueInstance8, colleagueInstance9];
    return colleguesListe;
  }

}
