import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-leaf-rake',
  templateUrl: './leaf-rake.component.html',
  styleUrls: ['./leaf-rake.component.css']
})
export class LeafRakeComponent implements OnInit {
  id;
  product: any;
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

  constructor(private route: ActivatedRoute, private cart: CartServiceService) { }

  ngOnInit() {
    // Lay id tren url va tim trong mang listproducts
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('productId');
    });
    this.product = this.listproducts.find(p => p.productId === this.id); 
  }

  addToCart(){
    let appProduct = Object.assign(this.product,{'quality':1})
    let haha = this.cart.check(appProduct);
    if(haha == false){
      alert('This product has already been added to your cart. Please choose another one!');
    }
    else{
      alert('Product has been added to cart')
      this.cart.addToCart(appProduct)
    }
  }

  onBack(){
    window.history.back()
  }
}
