import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickHandlerAComponent } from './click-handler/click-handler-a.component';
import { ClickHandlerBComponent } from './click-handler/click-handler-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickHandlerAComponent,
    ClickHandlerBComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
