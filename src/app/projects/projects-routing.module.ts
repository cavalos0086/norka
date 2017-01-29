import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

// Components groups: Givz
import { GivzComponent } from './givz/givz.component';
import { GivzBriefComponent } from './givz/givz-brief/givz-brief.component';
import { GivzResearchComponent } from './givz/givz-research/givz-research.component';
import { GivzDesignComponent } from './givz/givz-design/givz-design.component';
import { GivzLearningComponent } from './givz/givz-learning/givz-learning.component';

// Components groups: Pomoweb
import { PomowebComponent } from './pomoweb/pomoweb.component';

// Components groups: Strand
import { StrandComponent } from './strand/strand.component';


const projectRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'givz',
                component: GivzComponent,
                children: [
                    {path: '', redirectTo: 'brief', pathMatch: 'full'},
                    {path: 'brief', component:GivzBriefComponent},
                    {path: 'research', component: GivzResearchComponent},
                    {path: 'design', component: GivzDesignComponent},
                    {path: 'learning', component: GivzLearningComponent}
                ]
            },
            {
                path: 'pomoweb',
                component: PomowebComponent,
                children: []
            },
            {
                path: 'strand',
                component: StrandComponent,
                children: []
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule { }
