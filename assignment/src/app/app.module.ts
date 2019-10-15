import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore'

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { GopYComponent } from './gop-y/gop-y.component';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { TracNghiemComponent } from './trac-nghiem/trac-nghiem.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { CapNhatComponent } from './cap-nhat/cap-nhat.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';

var config = {
  apiKey: "AIzaSyBGVTvHx6YfHbOJEzGFRS20G6COZlkt4tc",
  authDomain: "angular-porfolio-3aa73.firebaseapp.com",
  databaseURL: "https://angular-porfolio-3aa73.firebaseio.com",
  projectId: "angular-porfolio-3aa73",
  storageBucket: "angular-porfolio-3aa73.appspot.com",
  messagingSenderId: "15240368631",
  appId: "1:15240368631:web:0094c3eca62210dc55def2"
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GioiThieuComponent,
    LienHeComponent,
    GopYComponent,
    HoiDapComponent,
    DanhMucComponent,
    TracNghiemComponent,
    DangNhapComponent,
    DangKyComponent,
    CapNhatComponent,
    DoiPassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    AngularFireModule,
    AngularFirestore,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'gioiThieu', component: GioiThieuComponent },
      { path: 'lienHe', component: LienHeComponent },
      { path: 'hoiDap', component: HoiDapComponent },
      { path: 'danhMuc', component: DanhMucComponent },
      { path: 'tracNghiem', component: TracNghiemComponent },
      { path: 'gopY', component: GopYComponent },
      { path: 'dangKy', component: DangKyComponent },
      { path: 'dangNhap', component: DangNhapComponent },
      { path: 'doiPass', component: DoiPassComponent },
      { path: 'capNhat', component: CapNhatComponent },
      // {path:'**', redirectTo:'product', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
