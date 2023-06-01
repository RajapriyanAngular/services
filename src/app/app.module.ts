import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { ElementsComponent } from './elements/elements.component';
import { ApiComponent } from './api/api.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component'

@NgModule({
  declarations: [
    AppComponent, DetailsComponent, CoursesComponent, ElementsComponent, ApiComponent, FirstComponent,  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
