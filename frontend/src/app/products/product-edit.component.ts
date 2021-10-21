import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  pageTitle='Edit Product';
  id=0;
  product:any = {};
  errorMessage = 'Error occured';
  sub: Subscription| undefined;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productService.getProduct(this.id).subscribe({
      next: product=> {
          this.product = product;
          console.log(this.product);
        },
        error: err => this.errorMessage = err
    });
    this.pageTitle+=`: ${this.id}`;
  }
  editProduct(form: NgForm): void
  {
    this.sub = this.productService.updateProduct(this.id, form.value).subscribe(
      {
        next: updateProduct => {
          console.log(updateProduct);
          alert('Product updated successfully!');
          this.router.navigate(['products/']);
        },
        error: err => {
          this.errorMessage = err
          console.log(err);
          // alert('Failed to update the product.');
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
