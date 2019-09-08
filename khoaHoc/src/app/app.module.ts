import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinhVienComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
