import { ColleagueService } from './../../../providers/colleague.service';
import { Component } from '@angular/core';

class ModelFormCollegue{
  pseudo?:string;
  nom?:string;
  prenom?:string;
  urlphoto?:string;
}

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueService:ColleagueService){

  }

  model = new ModelFormCollegue();

  submit(){
    console.log(this.model);
    if(this.model.pseudo && this.model.urlphoto){
      this.colleagueService.addCollegue(
        {
          pseudo: this.model.pseudo,
          photo: this.model.urlphoto,
          score: 0
        }
      )
    }
    //TODO envoi requête à l'API si ok
  }
}
