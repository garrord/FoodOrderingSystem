import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningHoursComponent } from './Components/OpeningHours/opening-hours.component';
import { HomePageContainer } from './Containers/HomePageContainer/home-page.container';
import { HttpClientModule } from '@angular/common/http';
import { LocationDetailService } from './Services/location-details.service';
import { LocationDetailsComponent } from './Components/LocationDetails/location-details.component';
import { MatIconModule } from '@angular/material/icon';
import { PictureComponent } from './Components/PictureComponent/picture.component';
import { RouterModule } from '@angular/router';
import { MenuContainer } from './Containers/MenuContainer/menu.container';
import { MenuItemsService } from './Services/menu-items.service';
import { CategoriesComponent } from './Components/CategoriesComponent/categories.component';
import { MenuItemsComponent } from './Components/MenuItemsComponent/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningHoursComponent,
    LocationDetailsComponent,
    HomePageContainer,
    PictureComponent,
    MenuContainer,
    CategoriesComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'home', component:HomePageContainer
      },
      {
        path:'menu', component: MenuContainer
      },
      {
        path:'', redirectTo: 'home', pathMatch: 'full'
      }
    ])
   ],
  providers: [
    LocationDetailService,
    MenuItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
