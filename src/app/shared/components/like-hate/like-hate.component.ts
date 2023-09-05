import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LikeHate } from '../../../models/like-hate';
import { Colleague } from '../../../models/colleague';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() newvalue:EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  @Input() overScore?:boolean;
  @Input() underScore?:boolean;

  boutonLike(){
    this.newvalue.emit(LikeHate.LIKE);
  }
  boutonHate(){
    this.newvalue.emit(LikeHate.HATE);
  }
}
