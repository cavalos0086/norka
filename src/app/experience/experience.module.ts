import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { SharedDirectivesModule } from '../sharedDirectives/sharedDirectives.module';

@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule,
    ExperienceRoutingModule
  ],
  declarations: [
      ExperienceComponent,
  ]
})
export class ExperienceModule { }
