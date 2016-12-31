import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmeComponent } from './contactme.component';
import { ContactmeRoutingModule } from './contactme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactmeRoutingModule
  ],
  declarations: [ContactmeComponent]
})
export class ContactmeModule { }
