import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { CaCircularProgressBarDirective } from '../sharedDirectives/ca-circular-progress-bar.directive';
import { CaGreenLineDividerDirective } from '../sharedDirectives/ca-greenLineDivider.directive';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [
      ExperienceComponent,
      CaCircularProgressBarDirective,
      CaGreenLineDividerDirective
  ]
})
export class ExperienceModule { }
