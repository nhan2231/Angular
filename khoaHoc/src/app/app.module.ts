import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinhVienComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path: 'Home', component: HomeComponent},
      {path: 'Home/:ID', component: SinhVienComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
