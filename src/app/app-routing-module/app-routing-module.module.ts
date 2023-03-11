import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../components/component1/component1.component';
import { Component2Component } from '../components/component2/component2.component';

const routes:  Routes = [
  { path: 'first-component', component: Component1Component },
  { path: 'second-component', component: Component2Component },
  { path: '**', component: Component1Component }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
