import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningHoursComponent } from './Components/opening-hours.component';
import { HomePageContainer } from './Containers/home-page.container';
import { HttpClientModule } from '@angular/common/http';
import { LocationDetailService } from './Services/location-details.service';

@NgModule({
  declarations: [
    AppComponent,
    OpeningHoursComponent,
    HomePageContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocationDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
