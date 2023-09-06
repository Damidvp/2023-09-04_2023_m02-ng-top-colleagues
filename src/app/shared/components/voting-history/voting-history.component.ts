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
    this.listeVotes = voteService.listOfVotes();
  }

  deleteFromList(element:Vote){
    const index = this.listeVotes.indexOf(element);
    if(index >= 0){
      this.listeVotes.splice(index, 1);
    }
  }
}
