import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
