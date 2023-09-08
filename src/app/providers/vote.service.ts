import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Vote } from './../models/vote';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private votes: Vote[] = [];
  private action = new Subject<Vote>();

  constructor(private http:HttpClient) {
    this.loadVotes();
  }

  get actionObs(){
    return this.action.asObservable();
  }

  /*
  listVotes() {
    const lh1: LikeHate = LikeHate.LIKE;
    const lh2: LikeHate = LikeHate.HATE;
    const lh3: LikeHate = LikeHate.HATE;
    const lh4: LikeHate = LikeHate.LIKE;
    const collegue1: Colleague = {
      pseudo: "ARNO_CAMOA",
      score: -300,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    }
    const collegue2: Colleague = {
      pseudo: "CHEB_GEEK",
      score: 200,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    }
    const collegue3: Colleague = {
      pseudo: "PEPINO_RONSO",
      score: 600,
      photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    }
    const vote1: Vote = {
      colleague: collegue1,
      vote: lh2
    }
    const vote2: Vote = {
      colleague: collegue2,
      vote: lh4
    }
    const vote3: Vote = {
      colleague: collegue1,
      vote: lh3
    }
    const vote4: Vote = {
      colleague: collegue3,
      vote: lh1
    }
    this.votes = [vote1, vote2, vote3, vote4];
  }
  */

  addVote(vote:Vote){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post<Vote>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes',
          {
            pseudo: vote.colleague.pseudo,
            like_hate: vote.vote.toString()
          },
          httpOptions
        )
        .subscribe(newVote => {
          //console.log("données envoyées : " + vote.colleague.pseudo + " - " + vote.vote.toString());
          this.votes.unshift(vote);
          this.action.next(vote);
          if(this.votes.length > 10){
            this.votes.pop();
          }
        })
  }

  loadVotes(){
    this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes')
    .subscribe({
      next: (allVotes: Vote[]) => {
        for(const vote of allVotes){
          this.votes.push(vote);
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getListOfVotes(){
    return this.votes;
  }

  getVotes(): Observable<Vote[]>{
    return this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes');
  }
}
