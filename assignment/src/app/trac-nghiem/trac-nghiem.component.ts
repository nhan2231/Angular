import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trac-nghiem',
  templateUrl: './trac-nghiem.component.html',
  styleUrls: ['./trac-nghiem.component.css']
})
export class TracNghiemComponent implements OnInit {
  list = [
    { ten: 'Lập trình Android nâng cao' },
    { ten: 'Xây dựng trang web' },
    { ten: 'Cơ sở dữ liệu' },
    { ten: 'SQL server' },
    { ten: 'Internet Marketing' },
    { ten: 'Lập trình hướng đối tượng với Java' },
    { ten: 'Lập trình PHP' },
    { ten: 'Điện toán đám mây' },
    { ten: 'Lập trình Android cơ bản' },
    { ten: 'Lập trình game 2D' },
    { ten: 'Thiết kế giao diện trên Android' },
    { ten: 'Thiết kế web cho điện thoại di động' },
    { ten: 'Lập trình ASP.NET' },
  ]


  constructor() { }

  ngOnInit() {
    var minute = 2;
    var second = 0;
    var count = setInterval(function () {
      second -= 1;
      if (minute == 0 && second == 0) {
        alert('woohooo');
      }
      else if (second < 0) {
        minute -= 1;
        second = 59;
      }
      document.getElementById('minute').innerHTML = minute + 'm: ' + second + 's';
    }, 1000);
  }


}
