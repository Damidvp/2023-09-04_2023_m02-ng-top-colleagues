import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  model:ModelLogin = new ModelLogin();

  constructor(private authService:AuthService, private route:Router){

  }

  submitLogin(){
    console.log(this.model);
    if(this.model.pseudo && this.model.password){
      this.authService.login(this.model.pseudo, this.model.password);
      return true;
    }
    return false;
  }

}
