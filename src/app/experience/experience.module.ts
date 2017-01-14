import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { CaCircularProgressBarDirective } from '../sharedDirectives/ca-circular-progress-bar.directive';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [
      ExperienceComponent,
      CaCircularProgressBarDirective
  ]
})
export class ExperienceModule { }
