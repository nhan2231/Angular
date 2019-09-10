import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    
  }

  collection = [];

  constructor() { 
    for(let i = 1; i <= 8; i++){
      this.collection.push(`Angular ${i}.0`)
    }
  }
}
