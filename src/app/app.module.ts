import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';

import { AppComponent } from './app.component';
import { CavalosCircularProgressBarDirective } from './cavalos-circular-progress-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    CavalosCircularProgressBarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    HomeModule,
    ContactModule,
    ExperienceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
