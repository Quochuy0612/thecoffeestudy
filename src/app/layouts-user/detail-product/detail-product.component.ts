import { ProductService } from './../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) { }
  categoryId;
  productId;
  Product;
  ngOnInit(): void {
    this.router.params.subscribe(sucess => {
      console.log(sucess)
      this.productId = sucess.productId;
      this.categoryId = sucess.catelogyId;
      this.getDetailProduct(this.categoryId, this.productId);
    });
  }
  getDetailProduct(categoryId: string, productId: string) {
    this.productService.getDetailProduct(categoryId, productId).subscribe(data=>{
      this.Product = data;
      console.log(this.Product);
    });
  }
}
