import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDirectivesModule } from '../sharedDirectives/sharedDirectives.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectNavigationComponent } from './project-navigation/project-navigation.component';
import { GivzModule } from './givz/givz.module';



@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule,
    ProjectsRoutingModule,
    GivzModule
  ],
  declarations: [ProjectsComponent, ProjectNavigationComponent]
})
export class ProjectsModule { }
