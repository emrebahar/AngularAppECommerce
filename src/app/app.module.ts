import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/services/cart.service';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CategoryComponent } from './category/category.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { PipeModule } from './shared/pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    CategoryComponent,
    ProductCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    ReactiveFormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
