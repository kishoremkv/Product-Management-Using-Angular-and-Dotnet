import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from "./product";

@Component({
  selector: 'pm-product-new-edit',
  templateUrl: './product-new-edit.component.html',
  styleUrls: ['./product-new-edit.component.css']
})
export class ProductNewEditComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  pageTitle='Add New Product';
  id=0;
  errorMessage = 'Error occured';
  sub: Subscription| undefined;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  addProduct(form: NgForm): void
  {
    this.sub = this.productService.addProduct(form.value).subscribe(
      {
        next: newProduct => {
          console.log(newProduct);
          alert('New product created successfully!');
          this.router.navigate(['products/']);
        },
        error: err => {
          this.errorMessage = err
          alert('Failed to create new product.');
          this.router.navigate(['products/']);
        }

      }
    )
  }
  onBack()
  {
    console.log('/product/'+this.id);
    if(this.id)
    this.router.navigate(['product/'+this.id]);
    else 
    this.router.navigate(['products/']);

  }
}
