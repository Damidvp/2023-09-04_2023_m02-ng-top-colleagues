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

  constructor(private voteService: VoteService){
    this.listeVotes = this.voteService.getListOfVotes();
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

  ngOnInit(){
    this.load();
  }

  reload(){
    this.load();
  }

  load(){
    this.listeVotes = [];
    this.voteService.getVotes().subscribe((votes)=>{
      for(const vote of votes){
        this.listeVotes.push(vote);
      }
    })
  }
}
