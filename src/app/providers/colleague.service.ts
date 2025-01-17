import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  listColleagues:Colleague[] = [];

  constructor(private http:HttpClient) {
    this.loadList();
  }

  listOfColleagues(): Colleague[] {
    //Collègues fictifs
    /*
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
    */
    return this.listColleagues;
  }

  loadList(){
    this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues')
    .subscribe({
      next: (colleagues: Colleague[]) => {
        for(const coll of colleagues){
          this.listColleagues.push(coll);
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getCollegues(): Observable<Colleague[]>{
    return this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues');
  }

  getCollegueByPseudo(pseudo:string){
    return this.http.get<Colleague | null>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/'+pseudo);
  }

  addCollegue(colleague:Colleague){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post<Colleague>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues',
          {
            pseudo: colleague.pseudo,
            last: colleague.last,
            first: colleague.first,
            photo: colleague.photo,
            score: colleague.score
          },
          httpOptions
        )
        .subscribe(newColleague => {
          this.listColleagues.push(colleague);
        })
  }

}
