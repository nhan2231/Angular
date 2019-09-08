import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(private cartService: CartServiceService) { }

  tong() {
    var s = 0;
    for (let i = 0; i < this.items.length; i++) {
      s += this.items[i].price * this.items[i].soluong;
    }
    return s;
  }

  cong(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (id == this.items[i].productId) {
        this.items[i].soluong += 1;
      }
    }
  }

  tru(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (id == this.items[i].productId && this.items[i].soluong > 1) {
        this.items[i].soluong -= 1;
      }
    }
  }

  ngOnInit() {
    this.items = this.cartService.getItems()
    console.log(this.items)
  }

}
