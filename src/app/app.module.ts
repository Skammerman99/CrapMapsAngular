import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';

import mapAPIKey from 'src/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: mapAPIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
