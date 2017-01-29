import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivzRoutingModule } from './givz-routing.module';
import { SharedDirectivesModule } from '../../sharedDirectives/sharedDirectives.module';
import { GivzComponent } from './givz.component';
import { GivzResearchStageComponent } from './givz-research-stage/givz-research-stage.component';
import { GivzProjectBriefComponent } from './givz-project-brief/givz-project-brief.component';

@NgModule({
    imports: [
        CommonModule,
        SharedDirectivesModule,
        GivzRoutingModule
    ],
    declarations: [
        GivzComponent,
        GivzResearchStageComponent,
        GivzProjectBriefComponent
    ]
})
export class GivzModule { }
