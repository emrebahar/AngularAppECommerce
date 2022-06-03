import { style } from '@angular/animations';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/services/cart.service';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  productList: Array<ProductModel> = new Array<ProductModel>();
  // productList2: ProductModel[] = [];
  addedProduct: string;
  filteredText: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['categoryId'];
      this.getProduct(Number(id) || 0);
    });
  }
  private getProduct(id: number) {
    this.productList = this.productService.getProductLocalStorage(id);
    if (!this.productList || !this.productList.length) {
      this.productService.getProduct().subscribe((response) => {
        this.productList = response;
      });
    }
  }
  // private getProductByCategoryId(id: number) {
  //   this.productList = this.productService.getProductLocalStorage(1);
  //   if (!this.productList || !this.productList.length) {
  //     this.productService.getProductByCategoryId(id).subscribe((response) => {
  //       localStorage.setItem('products', JSON.stringify(response));
  //       this.productList = response;
  //     });
  //   }
  // }

  addToCart(product: ProductModel) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    // setTimeout(() => {
    //   this.addedProduct = null;
    // }, 2000);
  }
}
