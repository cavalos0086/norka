import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavGuardService } from '../nav-guard.service';

import { ProjectsComponent } from './projects.component';
import { ProjectNavigationComponent } from './project-navigation/project-navigation.component';

const projectRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        canActivateChild: [NavGuardService],
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
