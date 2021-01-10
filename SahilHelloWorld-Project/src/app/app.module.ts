import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterpolationlearnComponent } from './interpolationlearn/interpolationlearn.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InterpolationlearnComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
