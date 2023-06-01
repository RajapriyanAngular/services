import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector:'hello',
    template:`<h1>{{title}}</h1>`,

})
export class HelloComponent{
    title:any = "Hello Component"

    constructor(){

    }
}