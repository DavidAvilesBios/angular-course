import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentNgifComponent } from './components/component-ngif/component-ngif.component';
import { ComponentNavbarComponent } from './components/component-navbar/component-navbar.component';
import { ComponentTableComponent } from './components/component-table/component-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNgifComponent,
    ComponentNavbarComponent,
    ComponentTableComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
