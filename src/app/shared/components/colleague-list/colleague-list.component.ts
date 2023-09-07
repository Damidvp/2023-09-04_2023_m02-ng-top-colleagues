import { ColleagueComponent } from './../colleague/colleague.component';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Colleague } from '../../../models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})

export class ColleagueListComponent implements OnInit{

  @ViewChild(ColleagueComponent) cComponent?: ColleagueComponent;

  listeColleagues:Array<Colleague> = [];

  constructor(private colleagueService: ColleagueService){ }

  ngOnInit(){
    this.load();
  }

  reload(){
    this.load();
  }

  load(){
    this.listeColleagues = [];
    this.colleagueService.getCollegues().subscribe((colleagues)=>{
      for(const coll of colleagues){
        this.listeColleagues.push(coll);
      }
    })
  }
}
