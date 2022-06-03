import { Component, OnInit } from '@angular/core';
import { CartModel } from './models/cart.model';
import { RemoveType } from './models/remove-type.enum';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent implements OnInit {
  cartList: CartModel[] = [];

  _removeType = RemoveType;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartList = this.cartService.list();
  }

  getTotal(cart: CartModel) {
    return cart.count * cart.product.unitPrice;
  }
  getTotalKdv(cart: CartModel) {
    return (
      cart.count *
      (cart.product.unitPrice + (cart.product.unitPrice / 100) * 18)
    );
  }
  removeFromCart(cart: CartModel, removeType: RemoveType) {
    this.cartService.removeFromCart(cart, removeType);
  }
}
