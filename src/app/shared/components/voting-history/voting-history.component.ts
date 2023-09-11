import { VoteService } from './../../../providers/vote.service';
import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { LikeHate } from './../../../models/like-hate';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  listeVotes:Array<Vote> = [];

  constructor(private voteService: VoteService){}

  deleteFromList(element:Vote){
    const index = this.listeVotes.indexOf(element);
    if(index >= 0){
      this.listeVotes.splice(index, 1);
    }
  }

  getScoreActuel(element:Vote):number{
    const scoreActuel:number = element.colleague.score;
    return scoreActuel;
  }

  isALike(vote:Vote){
    //console.log(vote.like_hate);
    if(vote.like_hate === LikeHate.LIKE){
      return true;
    } else if(vote.like_hate === LikeHate.HATE) {
      return false;
    }
    return true;
  }

  ngOnInit(){
    this.load();
  }

  reload(){
    this.load();
  }

  load(){
    this.listeVotes = this.voteService.getListOfVotes();
  }
}
