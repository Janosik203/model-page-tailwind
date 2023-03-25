import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'rate', component: HomeComponent},
      {path: 'aboutme', component: AboutMeComponent},
      {path: 'home', component: MainComponent},
      {path: '', redirectTo: '/rate', pathMatch: 'full'},
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
