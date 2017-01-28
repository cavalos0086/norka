import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projectsRoute;

  constructor(private router: Router) {
      // store projects route to navigation to root later.
      this.projectsRoute = this.router.url;
  }

  ngOnInit() {
  }

  goTo(view: string) {
      this.router.navigate([this.projectsRoute + '/' + view]);
  }
}
