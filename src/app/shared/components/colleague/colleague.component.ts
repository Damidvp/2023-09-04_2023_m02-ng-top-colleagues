import { Colleague } from './../../../models/colleague';
import { Component, Input } from '@angular/core';
import { LikeHate } from './../../../models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() collegue?:Colleague;

  changeScore(val:LikeHate){
    if(this.collegue){
      if(val === LikeHate.HATE){
        this.collegue.score -= 100;
      } else if (val === LikeHate.LIKE){
        this.collegue.score += 100;
      }
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
}
