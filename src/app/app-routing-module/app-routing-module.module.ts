import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../components/component1/component1.component';
import { Component2Component } from '../components/component2/component2.component';
import { Component3Component } from '../components/component3/component3.component';
import { ComponentroutenotfoundComponent } from '../components/componentroutenotfound/componentroutenotfound.component';

const routes:  Routes = [
  { path: '', component: Component1Component },
  { path: 'first-component', component: Component1Component },
  { path: 'second-component', component: Component2Component },
  { path: 'third-component', component: Component3Component },
  { path: '**', component: ComponentroutenotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
