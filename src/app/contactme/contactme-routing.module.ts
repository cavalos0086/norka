import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactmeComponent } from './contactme.component';

const contactmeRoutes: Routes = [
  {path: 'contactme', component: ContactmeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(contactmeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactmeRoutingModule {}
