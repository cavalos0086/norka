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
import { PomowebBriefComponent } from './pomoweb/pomoweb-brief/pomoweb-brief.component';
import { PomowebDesignComponent } from './pomoweb/pomoweb-design/pomoweb-design.component';
import { PomowebLearningComponent } from './pomoweb/pomoweb-learning/pomoweb-learning.component';

// Components groups: Strand
import { StrandComponent } from './strand/strand.component';
import { StrandBriefComponent } from './strand/strand-brief/strand-brief.component';
import { StrandResearchComponent } from './strand/strand-research/strand-research.component';
import { StrandDesignComponent } from './strand/strand-design/strand-design.component';
import { StrandLearningComponent } from './strand/strand-learning/strand-learning.component';


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
                    {path: 'brief', component: GivzBriefComponent},
                    {path: 'research', component: GivzResearchComponent},
                    {path: 'design', component: GivzDesignComponent},
                    {path: 'learning', component: GivzLearningComponent}
                ]
            },
            {
                path: 'pomoweb',
                component: PomowebComponent,
                children: [
                    {path: '', redirectTo: 'brief', pathMatch: 'full'},
                    {path: 'brief', component: PomowebBriefComponent},
                    {path: 'design', component: PomowebDesignComponent},
                    {path: 'learning', component: PomowebLearningComponent}
                ]
            },
            {
                path: 'strand',
                component: StrandComponent,
                children: [
                    {path: '', redirectTo: 'brief', pathMatch: 'full'},
                    {path: 'brief', component: StrandBriefComponent},
                    {path: 'research', component: StrandResearchComponent},
                    {path: 'design', component: StrandDesignComponent},
                    {path: 'learning', component: StrandLearningComponent}
                ]
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
