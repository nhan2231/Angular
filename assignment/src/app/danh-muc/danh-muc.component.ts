import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {

  list = [
    {ten: 'Lập trình Android nâng cao'},
    {ten: 'Xây dựng trang web'},
    {ten: 'Cơ sở dữ liệu'},
    {ten: 'SQL server'},
    {ten: 'Internet Marketing'},
    {ten: 'Lập trình hướng đối tượng với Java'},
    {ten: 'Lập trình PHP'},
    {ten: 'Điện toán đám mây'},
    {ten: 'Lập trình Android cơ bản'},
    {ten: 'Lập trình game 2D'},
    {ten: 'Thiết kế giao diện trên Android'},
    {ten: 'Thiết kế web cho điện thoại di động'},
    {ten: 'Lập trình ASP.NET'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
