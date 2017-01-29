import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDirectivesModule } from '../sharedDirectives/sharedDirectives.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectNavigationComponent } from './project-navigation/project-navigation.component';
import { StrandComponent } from './strand/strand.component';
import { GivzComponent } from './givz/givz.component';
import { PomowebComponent } from './pomoweb/pomoweb.component';
import { GivzBriefComponent } from './givz/givz-brief/givz-brief.component';
import { GivzResearchComponent } from './givz/givz-research/givz-research.component';
import { GivzDesignComponent } from './givz/givz-design/givz-design.component';
import { GivzLearningComponent } from './givz/givz-learning/givz-learning.component';

@NgModule({
    imports: [
        CommonModule,
        SharedDirectivesModule,
        ProjectsRoutingModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectNavigationComponent,
        StrandComponent,
        GivzComponent,
        PomowebComponent,
        GivzBriefComponent,
        GivzBriefComponent,
        GivzResearchComponent,
        GivzDesignComponent,
        GivzLearningComponent
    ]
})
export class ProjectsModule { }
