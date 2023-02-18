import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentNgifComponent } from './components/component-ngif/component-ngif.component';
import { ComponnentTableComponent } from './componnent-table/componnent-table.component';
import { ComponnentNavbarComponent } from './componnent-navbar/componnent-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNgifComponent,
    ComponnentTableComponent,
    ComponnentNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
