import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrandRoutingModule } from './strand-routing.module';
import { StrandComponent } from './strand.component';

@NgModule({
  imports: [
    CommonModule,
    StrandRoutingModule
  ],
  declarations: [StrandComponent]
})
export class StrandModule { }
