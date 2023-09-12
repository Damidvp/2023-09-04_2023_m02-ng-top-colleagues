import { Colleague } from './../../../models/colleague';
import { Observable, map, of } from 'rxjs';
import { FirstLastValidatorDirective } from './../../validators/first-last-validator.directive';
import { PseudoValidatorDirective } from '../../validators/pseudo-validator.directive';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

class ModelFormCollegue {
  pseudo?: string;
  nom?: string;
  prenom?: string;
  urlphoto?: string;
}

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {

  model: ModelFormCollegue = new ModelFormCollegue();
  formColleagues: FormGroup;

  constructor(private colleagueService: ColleagueService, private formBuilder: FormBuilder) {
    this.formColleagues = this.formBuilder.group({
      pseudo: ['', Validators.required],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      url: ['', Validators.required]
    },
      { validators: [this.validateFirstLast] }
    );
  }

  submit() {
    //console.log(this.model);
    //console.log(this.checkIfNicknameExists(this.model.pseudo))
    if (this.model.pseudo && this.model.nom && this.model.prenom && this.model.urlphoto) {
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
  }

  pseudoIsValid() {
    return this.formColleagues.get('pseudo')?.valid;
  }

  nomIsValid() {
    return this.formColleagues.get('nom')?.valid;
  }

  prenomIsValid() {
    return this.formColleagues.get('prenom')?.valid;
  }

  urlIsValid(url: string | undefined) {
    if (url) {
      return url.includes("http://") || url.includes("https://");
    }
    return false;
  }

  validateUrl(control: AbstractControl): ValidationErrors | null {
    if (control.value.url.includes("http://") || control.value.url.includes("https://")) {
      return null;
    }
    return { urlError: "URL incorrecte" };
  }

  validateFirstLast(control: AbstractControl): ValidationErrors | null {
    if (control.value.nom == control.value.prenom) {
      console.log("same");
      return { firstLast: 'Le nom et prénom doivent être différents.' };
    }
    return null;
  }

  resetModel() {
    this.model.pseudo = '';
    this.model.nom = '';
    this.model.prenom = '';
    this.model.urlphoto = '';
  }


}
