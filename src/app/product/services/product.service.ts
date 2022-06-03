import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { localStorageType } from 'src/app/shared/enum/local-storage-type.enum';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}
  getProduct(): Observable<ProductModel[]> {
    return this.http.get(`${this.apiUrl}Products`).pipe(
      map((resposne: ProductModel[]) => {
        this.localStorageService.setItem(localStorageType.products, resposne);
        return resposne;
      })
    );
  }

  // getProductByCategoryId(id: number): Observable<ProductModel[]> {
  //   return this.http
  //     .get(`${this.apiUrl}Categories/${id}/Products`)
  //     .pipe(map((response: ProductModel[]) => response));
  // }
  getProductLocalStorage(id: number): ProductModel[] {
    const data = this.localStorageService.getItem(
      localStorageType.products
    ) as ProductModel[];
    if (data) {
      if (id > 0) {
        return data.filter((x) => x.categoryId == id);
      }
      return data;
    }
    return [];
  }
}
