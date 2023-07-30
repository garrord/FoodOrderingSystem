import { NgModule, isDevMode } from '@angular/core';
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
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MenuItemDialogContainer } from './Containers/MenutItemDialog/menu-item-dialog.container';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { menuCheckoutReducer } from './state/menu-checkout.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CheckoutComponent } from './Components/CheckoutComponent/checkout.component';
import { NavBarComponent } from './Components/NavBar/nav-bar.component';
import { CheckoutContainer } from './Containers/CheckoutContainer/checkout.container';
import { MatBadgeModule } from '@angular/material/badge';
import { AddItemContainer } from './Containers/AddItemContainer/add-item.container';

@NgModule({
  declarations: [
    AppComponent,
    OpeningHoursComponent,
    LocationDetailsComponent,
    HomePageContainer,
    PictureComponent,
    MenuContainer,
    CategoriesComponent,
    MenuItemsComponent,
    MenuItemDialogContainer,
    AddItemContainer,
    CheckoutComponent,
    NavBarComponent,
    CheckoutContainer
  ],
  imports: [
    MatBadgeModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: 'home', component:HomePageContainer
      },
      {
        path:'menu', component: MenuContainer
      },
      {
        path:'', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path:'cart', component: CheckoutContainer
      }
    ]),
    BrowserAnimationsModule,
    StoreModule.forRoot({ feature: menuCheckoutReducer }, {}),
    StoreDevtoolsModule.instrument({ 
      name: "demo app dev tools",
      maxAge: 25, 
      logOnly: !isDevMode() 
    })
   ],
  providers: [
    LocationDetailService,
    MenuItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }