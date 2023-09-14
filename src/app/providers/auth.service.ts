import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }

  login(pseudo:string, mdp:string){
    console.log("login " + pseudo + " " + mdp);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<Object>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login',
      {
        pseudo: pseudo,
        password: mdp
      },
      httpOptions
    )

  }

  isLoggedIn(){
    console.log(localStorage.getItem("jwt"));
    if(localStorage.getItem("jwt")){
      return true;
    }
    return false;
  }
}
