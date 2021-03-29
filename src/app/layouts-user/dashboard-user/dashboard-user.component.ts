import { Category } from 'app/models/Category.model';
import { ProductService } from 'app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }
  categoryId;
  category;
  product: Product[];
  
  ngOnInit(): void {
    this.productService.getCate().subscribe((category: any[]) => {
      this.category = category;
      category.forEach(data =>{
        console.log(data);
      });
    });
    this.getProducts();
  }
  getProducts() {
      this.productService.getProducts().subscribe((product: any[]) => {
        this.product = product;
        console.log(this.product)
      });
  }
  // converProduct(data): Product[]{
  //   const result = []; 
  //   data.forEach(element => {
  //     // tslint:disable-next-line:semicolon
  //     const i  = new Product();
  //     i.name = element.name;
  //     i._id = element._id;
  //     i._categoryId = element._categoryId;
  //     i.imagePath = element.imagePath;
  //     i.description = element.description;
  //     i.price = element.price;
  //     result.push(i);
  //   });
  //   return result;
  // }
}
