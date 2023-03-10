import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediumCardComponent } from './medium-card/medium-card.component';
import { SmallCardComponent } from './small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MediumCardComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
