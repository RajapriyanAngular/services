import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title1 = "List of Courses";
  courses;

  constructor(service : CoursesService){
   
    this.courses = service.getCourses();
  }
  
}



