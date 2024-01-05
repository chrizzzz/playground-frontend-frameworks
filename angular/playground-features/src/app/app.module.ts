import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './basics/components/overview/overview.component';
import { LifecylceComponent } from './basics/components/lifecylce/lifecylce.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LifecylceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
