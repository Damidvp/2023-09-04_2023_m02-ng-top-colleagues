import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  private nombre = 0;

  constructor() { }

  incrementer():number{
    this.nombre++
    return this.nombre;
  }
}
