import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentNgifComponent } from './components/component-ngif/component-ngif.component';
import { ComponentTableComponent } from './component-table/component-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNgifComponent,
    ComponentTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
