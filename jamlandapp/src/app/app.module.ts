import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JamlandComponent } from './shared/jamland/jamland.component';
import { HeaderComponent } from './shared/jamland/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './shared/jamland/home/home.component';
import { LibrarycardComponent } from './shared/jamland/librarycard/librarycard.component';

@NgModule({
  declarations: [
    AppComponent,
    JamlandComponent,
    HeaderComponent,
    HomeComponent,
    LibrarycardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
