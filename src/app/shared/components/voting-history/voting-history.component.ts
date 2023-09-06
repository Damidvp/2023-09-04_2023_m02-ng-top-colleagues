import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { LikeHate } from './../../../models/like-hate';
import { Component } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  lh1:LikeHate = LikeHate.LIKE;
  lh2:LikeHate = LikeHate.HATE;
  lh3:LikeHate = LikeHate.HATE;
  lh4:LikeHate = LikeHate.LIKE;
  collegue1:Colleague = {
    pseudo: "ARNO_CAMOA",
    score: -300,
    photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  }
  collegue2:Colleague = {
    pseudo: "CHEB_GEEK",
    score: 200,
    photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  }
  collegue3:Colleague = {
    pseudo: "PEPINO_RONSO",
    score: 600,
    photo: "https://assetsio.reedpopcdn.com/final-fantasy-14-is-a-storytelling-masterpiece-1640014645264.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  }
  vote1:Vote = {
    colleague: this.collegue1,
    vote: this.lh2
  }
  vote2:Vote = {
    colleague: this.collegue2,
    vote: this.lh4
  }
  vote3:Vote = {
    colleague: this.collegue1,
    vote: this.lh3
  }
  vote4:Vote = {
    colleague: this.collegue3,
    vote: this.lh1
  }
  listeVotes:Array<Vote> = [this.vote1, this.vote2, this.vote3, this.vote4];

  deleteFromList(element:Vote){
    const index = this.listeVotes.indexOf(element);
    if(index >= 0){
      this.listeVotes.splice(index, 1);
    }
  }
}
