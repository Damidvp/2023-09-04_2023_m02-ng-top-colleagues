import { ColleagueService } from './../../../providers/colleague.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VoteService } from './../../../providers/vote.service';
import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LikeHate } from './../../../models/like-hate';
import { ScorePipe } from '../../pipes/score.pipe';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() collegue?:Colleague;

  @Output() collegueVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private voteService: VoteService, private colleagueService: ColleagueService){

  }

  changeScore(){
    if(this.collegue){
      this.colleagueService.getCollegueByPseudo(this.collegue.pseudo).subscribe(coll => {
        if(coll && this.collegue){
          this.collegue.score = coll.score;
        }
      })
    }

  }

  overScore():boolean{
    if(this.collegue){
      if(this.collegue?.score >= 1000){
        return true;
      }
    }
    return false;
  }

  underScore():boolean{
    if(this.collegue){
      if(this.collegue?.score <= -1000){
        return true;
      }
    }
    return false;
  }

  addVoteToCollegue(vote:LikeHate){
    if(this.collegue){
      const newVote = {
        colleague: this.collegue,
        like_hate: vote,
        scoreActuel: this.collegue.score
      }
      this.voteService.addVote(newVote);
    }
  }
}
