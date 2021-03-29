import { Injectable } from '@angular/core';
import { Product } from 'app/models/Product';
import { WebRequestService } from './web-request.service';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private products$ = new Subject<Product[]>();
  readonly url = "http://localhost:3000/api/product";
  constructor(
    private webReqService: WebRequestService,
    private http: HttpClient) { }

  getCate() {
    return this.webReqService.get('categories');
  }

  createCategory(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('category', { title });
  }

  getProductsById(categoryId: string) {
    return this.webReqService.get(`api/product/${categoryId}`);
  }

  getProducts() {
    return this.webReqService.get(`api/product`);
  }
  getDetailProduct(categoryId: string, productId: String) {
    return this.webReqService.get(`api/product/${categoryId}/${productId}`);
  }

  addProduct(name: string, image: File, price: string, description: string, _categoryId: string,): void {
    const productData = new FormData();
    productData.append("name", name);
    productData.append("image", image, name);
    productData.append("price", price);
    productData.append("description", description);
    productData.append("_categoryId", _categoryId);
    this.http
      .post<{ product: Product }>(this.url, productData)
      .subscribe((productData) => {
        const product: Product = {
          _id: productData.product._id,
          name: name,
          imagePath: productData.product.imagePath,
          price: price,
          description: description,
          _categoryId: _categoryId,
        };
        this.products.push(product);
        this.products$.next(this.products);
      });
  }
}
