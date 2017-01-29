import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { GivzComponent } from './givz/givz.component';
import { PomowebComponent } from './pomoweb/pomoweb.component';
import { StrandComponent } from './strand/strand.component';


const projectRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'givz',
                component: GivzComponent,
                children: []
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
