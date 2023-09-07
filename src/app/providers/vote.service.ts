import { Subject } from 'rxjs';
import { Colleague } from './../models/colleague';
import { LikeHate } from './../models/like-hate';
import { Vote } from './../models/vote';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  private votes: Vote[] = [];
  private action = new Subject<Vote>();

  get actionObs(){
    return this.action.asObservable();
  }

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

  getVotes(){
    return this.votes;
  }

  addVote(vote:Vote){
    this.votes.push(vote);
    this.action.next(vote);
  }
}
