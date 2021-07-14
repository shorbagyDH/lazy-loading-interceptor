import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', component: ChildComponent },
  { path: '**', redirectTo: '/lazy', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }