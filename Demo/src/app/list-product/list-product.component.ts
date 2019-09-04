import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listproducts = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "soluong": 1,
      "starRating": 3.2,
      "imageUrl": "leafrake.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "soluong": 1,
      "starRating": 4.2,
      "imageUrl": "gardencart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "soluong": 1,
      "starRating": 4.8,
      "imageUrl": "hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "soluong": 1,
      "starRating": 3.7,
      "imageUrl": "saw.jpg"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "soluong": 1,
      "starRating": 4.6,
      "imageUrl": "gamecontroller.jpg"
    },
  ]
  isShow = true;
  anHien() {
    this.isShow = !(this.isShow);
  }
  constructor() { }

  tong() {
    var s = 0;
    for (let i = 0; i < this.listproducts.length; i++) {
      s += this.listproducts[i].price * this.listproducts[i].soluong;
    }
    return s;
  }

  cong(id) {
    for (let i = 0; i < this.listproducts.length; i++) {
      if (id == this.listproducts[i].productId) {
        this.listproducts[i].soluong += 1;
      }
    }
  }

  tru(id) {
    for (let i = 0; i < this.listproducts.length; i++) {
      if (id == this.listproducts[i].productId && this.listproducts[i].soluong > 0) {
        this.listproducts[i].soluong -= 1;
      }
    }
  }

  ngOnInit() {
  }

}
