import { ColleagueService } from './../../../providers/colleague.service';
import { Component } from '@angular/core';
import { Colleague } from '../../../models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})

export class ColleagueListComponent {

  listeColleagues:Array<Colleague> = [];

  constructor(private colleagueService: ColleagueService){
    this.listeColleagues = colleagueService.listOfColleagues();
  }
}
