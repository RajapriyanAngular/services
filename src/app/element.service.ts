import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  getElements(){
    return ['element1','element2','element3']
  }
  constructor() { }
}
