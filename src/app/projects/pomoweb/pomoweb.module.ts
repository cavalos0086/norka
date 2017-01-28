import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomowebRoutingModule } from './pomoweb-routing.module';
import { PomowebComponent } from './pomoweb.component';

@NgModule({
  imports: [
    CommonModule,
    PomowebRoutingModule
  ],
  declarations: [PomowebComponent]
})
export class PomowebModule { }
