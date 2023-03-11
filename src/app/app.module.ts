import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
// import { Test2Component } from './test2/test2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { RouterModule } from '@angular/router';
import { Component3Component } from './components/component3/component3.component';
import { ComponentroutenotfoundComponent } from './components/componentroutenotfound/componentroutenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    // Test2Component,
    NavbarComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ComponentroutenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
