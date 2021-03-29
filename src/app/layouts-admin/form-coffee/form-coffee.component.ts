import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/models/Category.model';
import { Product } from 'app/models/product';
import { ProductService } from 'app/Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-coffee',
  templateUrl: './form-coffee.component.html',
  styleUrls: ['./form-coffee.component.css']
})
export class FormCoffeeComponent implements OnInit {

  category: Category[];
  product: Product[];
  _categoryId: any;
  selectedValue: string;
  selectedView: string;

  form: FormGroup;
  imageData: string;
  products: Product[] = [];
  private productSubscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  createNewCategory(title: string) {
    this.productService.createCategory(title).subscribe((response: any) => {
      window.location.reload();
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.productService.getCate().subscribe((category: any[]) => {
      this.category = category;
      console.log(category);
    })
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      price: new FormControl(null),
      description: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    this.productService.addProduct(this.form.value.name, this.form.value.image, this.form.value.price, this.form.value.description, this.selectedValue);
    this.form.reset();
    this.imageData = null;
  }
  clickProduct() {
    this.productService.getProductsById(this.selectedView).subscribe((product: any[]) => {
      this.product = product;
      console.log(product);
    })
  }

}
  