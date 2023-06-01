import { Component } from '@angular/core';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent {
  title="List of Elements";
  elements;
  constructor(service:ElementService){
    this.elements = service.getElements();
    

  }
}
