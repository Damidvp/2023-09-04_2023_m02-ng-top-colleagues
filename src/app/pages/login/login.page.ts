import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

class ModelLogin{
  pseudo?:string;
  password?:string;
}


@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  formLogin:FormGroup;
  model:ModelLogin = new ModelLogin();
  jwt:string|any;
  connexionOK:boolean = true;

  constructor(private authService:AuthService, private route:Router, private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitLogin(){
    console.log(this.model);
    if(this.model.pseudo && this.model.password){
      this.authService.login(this.model.pseudo, this.model.password).subscribe((login) => {
        console.log(login);
        this.jwt = login;
        if(this.jwt){
          console.log(this.jwt.jwt);
          localStorage.setItem("jwt", this.jwt.jwt);
          this.route.navigate(["/welcome-page"]);
        }
      },
      (error) => {
        console.error(error);
        this.connexionOK = false;
      });
    }
  }

}
