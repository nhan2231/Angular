import { Component, OnInit, NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  students = [
    { ID: 1, 'FirstMidName': "Carson", LastName: "Alexander", EnrollmentDate: "2005-09-01" },
    { ID: 2, FirstMidName: "Meredith", LastName: "Alonso", EnrollmentDate: "2002-09-01" }, 
    { ID: 3, FirstMidName: "Arturo", LastName: "Anand", EnrollmentDate: "2003-09-01" }, 
    { ID: 4, FirstMidName: "Gytis", LastName: "Barzdukas", EnrollmentDate: "2002-09-01" }, 
    { ID: 5, FirstMidName: "Yan", LastName: "Li", EnrollmentDate: "2002-09-01" }, 
    { ID: 6, FirstMidName: "Peggy", LastName: "Justice", EnrollmentDate: "2001-09-01" },
    { ID: 7, FirstMidName: "Laura", LastName: "Norman", EnrollmentDate: "2003-09-01" },
    { ID: 8, FirstMidName: "Nino", LastName: "Olivetto", EnrollmentDate: "2005-09-01" }
  ];

  std = this.students;

  ngOnInit() {

  }

  collection = [];

  constructor() { 
    for(let i = 1; i <= 8; i++){
      this.collection.push(`Angular ${i}.0`)
    }
  }

  xoa(id){
    for(let v = 0; v < this.std.length; v++){
      if(this.std[v].ID === id){
        this.std.splice(v,1);
      }
    }
  }

  searchName(id){
    for(let v of this.std){
      if(v.ID == id){
        return v.FirstMidName + " " +v.LastName;
      }
    }
  }

  al(id){
    if (confirm("Delete " + this.searchName(id) + "?")) {
      this.xoa(id);
    } else {}
  }

}
