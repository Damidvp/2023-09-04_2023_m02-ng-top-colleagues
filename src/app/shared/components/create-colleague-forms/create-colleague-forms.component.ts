import { NgForm } from '@angular/forms';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, ViewChild } from '@angular/core';

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
    //console.log(this.model);
    //console.log(this.checkIfNicknameExists(this.model.pseudo))
    if(this.model.pseudo && this.model.nom && this.model.prenom && this.model.urlphoto){
      console.log("données envoyées : " + this.model.pseudo + this.model.urlphoto)
      this.colleagueService.addCollegue(
        {
          pseudo: this.model.pseudo,
          photo: this.model.urlphoto,
          score: 0
        },
        this.model.nom,
        this.model.prenom
      )
    }
    this.resetModel();

    //TODO envoi requête à l'API si ok
  }

  checkIfNicknameExists(pseudo:string|undefined){
    if(pseudo){
      if(this.colleagueService.getCollegueByPseudo(pseudo)){
        return true;
      }
    }
    return false;
  }

  urlIsValid(url:string|undefined){
    if(url){
      return url.includes("http://");
    }
    return false;
  }

  resetModel(){
    this.model.pseudo = '';
    this.model.nom = '';
    this.model.prenom = '';
    this.model.urlphoto = '';
  }
}
