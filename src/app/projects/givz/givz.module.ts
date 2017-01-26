import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GivzRoutingModule } from './givz-routing.module';
import { GivzComponent } from './givz.component';

@NgModule({
  imports: [
    CommonModule,
    GivzRoutingModule
  ],
  declarations: [GivzComponent]
})
export class GivzModule { }
