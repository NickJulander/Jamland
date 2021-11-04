import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';

import { MainComponent } from './components/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScaleLibraryComponent } from './components/scale-library/scale-library.component';
import { ChordLibraryComponent } from './components/chord-library/chord-library.component';
import { MyJamComponent } from './components/my-jam/my-jam.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    LibraryComponent,
    NavigationComponent,
    ScaleLibraryComponent,
    ChordLibraryComponent,
    MyJamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
