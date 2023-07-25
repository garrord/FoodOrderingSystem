import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningHoursComponent } from './Components/OpeningHours/opening-hours.component';
import { HomePageContainer } from './Containers/home-page.container';
import { HttpClientModule } from '@angular/common/http';
import { LocationDetailService } from './Services/location-details.service';
import { LocationDetailsComponent } from './Components/LocationDetails/location-details.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    OpeningHoursComponent,
    LocationDetailsComponent,
    HomePageContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    LocationDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
