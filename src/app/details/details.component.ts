import { Component } from '@angular/core';
import { DataService  } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
   providers:[DataService]
})
export class DetailsComponent {

  infoRecieved1: string[]=[]

  infoRecieved2: string[]=[]

  infoRecieved3: string[]=[]

  getInfoService1(){
    this.infoRecieved1 = this.dservice.getInfo1()
  }
  getInfoService2(){
    this.infoRecieved2 = this.dservice.getInfo2()
  }
  getInfoService3(){
    this.infoRecieved3 = this.dservice.getInfo3()
  }

  constructor(private dservice:DataService){}
  updateInfo(frm:any){
    this.dservice.addInfo(frm.value.location)
  }
}
