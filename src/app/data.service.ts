import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[]=["Dhoni",'07','msd@gmail.com']

  info2: string[]=["Virat",'18','vk@gmail.com']

  info3: string[]=["Gill",'77','shubman@gmail.com']

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}




