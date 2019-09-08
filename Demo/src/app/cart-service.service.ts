import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items=[];
  
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  };

  check(product){
    for(let item of this.items){
      if(product.productId === item.productId){
        return false;
      }
    }
    return true;
  }

  constructor() { }
}
