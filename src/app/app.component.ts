import { Component } from '@angular/core';
import { Colleague } from './models/colleague';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  //Collègue fictif
  colleagueInstance:Colleague = {
    pseudo: "arno_camoa",
    score: 1000,
    photo: "unephoto"
  };
}
