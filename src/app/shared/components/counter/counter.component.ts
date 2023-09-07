import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from './../../../models/vote';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
  counterLike: number = 0;
  counterHate: number = 0;
  actionSub: Subscription;

  constructor(private voteService: VoteService) {
    this.actionSub = this.voteService.actionObs.subscribe(
      (data: Vote) => {
        if (data.vote == LikeHate.LIKE) {
          this.counterLike++;
        } else if (data.vote == LikeHate.HATE) {
          this.counterHate++;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }
}
