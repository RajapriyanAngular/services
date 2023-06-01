import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(){
    return ['course1','course2','course3'];
  }
  constructor() { }
}

export class ElementsService{
  getElements(){
    return ['element1','element2','element3']
  }
}