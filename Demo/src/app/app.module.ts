import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafRakeComponent } from './leaf-rake/leaf-rake.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from'@angular/router';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LeafRakeComponent,
    ListProductComponent,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ListProductComponent},
      {path: 'product', component:ListProductComponent},
      {path: 'product/:productId', component:LeafRakeComponent},
      {path: 'cart', component:CartComponent},
      {path:'**', redirectTo:'product', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
