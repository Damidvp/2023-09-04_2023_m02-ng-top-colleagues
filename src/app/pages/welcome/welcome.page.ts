import { VotingHistoryComponent } from './../../shared/components/voting-history/voting-history.component';
import { ColleagueListComponent } from './../../shared/components/colleague-list/colleague-list.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {

  @ViewChild(ColleagueListComponent) clComponent?: ColleagueListComponent;
  @ViewChild(VotingHistoryComponent) vtComponent?: VotingHistoryComponent;

  reloadAll(){
    this.clComponent?.reload();
    this.vtComponent?.reload();
  }

}
