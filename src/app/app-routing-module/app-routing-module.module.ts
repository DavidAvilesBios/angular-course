import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../components/component1/component1.component';
import { Component2Component } from '../components/component2/component2.component';
import { PruebaComponent } from '../prueba/prueba.component';
import { ErrorComponent } from '../error/error.component';

const routes:  Routes = [
  
  { path: '', component: Component1Component },
  { path: 'second-component', component: Component2Component },
  {path:'prueba',component:PruebaComponent},
  { path: '**', component: ErrorComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
