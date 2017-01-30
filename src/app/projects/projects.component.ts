import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projectsRoute;
    isGivzActive = false;
    isPomowebActive = false;
    isStrandActive = false;

  constructor(private router: Router) {
      // store projects route to navigation to root later.
      this.projectsRoute = 'projects';
  }

  ngOnInit() {
  }

  goTo(view: string) {
      switch(view) {
          case 'givz':
            this.isGivzActive = true;
            this.isPomowebActive = false;
            this.isStrandActive = false;
            break;
        case 'pomoweb':
            this.isGivzActive = false;
            this.isPomowebActive = true;
            this.isStrandActive = false;
            break;
        case 'strand':
            this.isGivzActive = false;
            this.isPomowebActive = false;
            this.isStrandActive = true;
            break;
      }

      this.router.navigate([this.projectsRoute + '/' + view]);
  }
}
