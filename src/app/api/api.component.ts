import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  items = ""
  data: any;

  constructor(private apiservice:ApiService){

  }
  ngOnInit(){
    this.apiservice.getPosts().subscribe((result)=>{
      console.warn("result",result);
      this.data = result
      
    })
  }

}
