import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { RouterModule } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { FormsModule } from '@angular/forms';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Component1Component,
    Component2Component,
    CrudComponent,
    TablaAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
