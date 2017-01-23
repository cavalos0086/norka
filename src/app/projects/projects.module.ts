import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDirectivesModule } from '../sharedDirectives/sharedDirectives.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';



@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
