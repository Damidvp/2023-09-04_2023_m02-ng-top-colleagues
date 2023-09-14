import { Colleague } from './../../../models/colleague';
import { AuthService } from './../../../providers/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  userLogged:Colleague | null = null;

  constructor(private authService:AuthService){
    this.authService.getUserLoggedIn().subscribe((user) => {
      this.userLogged = {
        pseudo: user.pseudo,
        first: user.first,
        last: user.last,
        score: user.score,
        photo: user.photo
      };
    })

  }

  deconnexion(){
    this.authService.logOut();
  }

}
