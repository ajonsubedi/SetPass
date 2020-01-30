import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { StorageService } from './Services/storage.service';
import { DataService } from './Services/data.service';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { HomePageModule } from "../app/Pages/home/home.module";
import { DetailsModule } from "./Pages/details/details.module";
import { PasswordsPageModule } from "./Pages/passwords/passwords.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    PasswordsPageModule,
    DetailsModule,
    IonicStorageModule.forRoot(),
    PasswordStrengthMeterModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    DataService,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
