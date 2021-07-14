import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildComponent } from './child/child.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [ChildComponent]
})
export class LazyModule { }