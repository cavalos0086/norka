import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectNavigationComponent } from './project-navigation/project-navigation.component';
import { GivzComponent } from './givz/givz.component';

const projectRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {path: '', component: ProjectNavigationComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule { }
