import { VoteService } from './../../../providers/vote.service';
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

  listeVotes:Array<Vote> = [];

  constructor(private voteService: VoteService){
    //voteService.listVotes();
    this.listeVotes = voteService.getVotes();
  }

  addToList(element:Vote){
    this.listeVotes.push(element);
  }

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

  isALike(val:LikeHate){
    if(val === LikeHate.LIKE){
      return true;
    } else {
      return false;
    }
  }
}
