import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
  pageTitle="Product Detail";
  id= 0;
  product: IProduct | undefined;
  sub: Subscription| undefined;
  errorMessage = "Error occured in product-detail-component";
  imageWidth = 50;
  imageMargin = 2;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`: ${this.id}`;
    console.log("on init product-list-component");
    this.sub = this.productService.getProduct(this.id).subscribe({
      next: product=> {
          this.product = product;
          console.log(this.product);
        },
        error: err => this.errorMessage = err
    });
  }


  ngOnDestroy():void
  {
    this.sub?.unsubscribe();
  }
  onBack()
  {
    this.router.navigate(['/products']);
  }

  onDelete()
  {
    console.log(this.id);
    console.log(`Deleting ${this.product?.productName} details`);
    this.sub = this.productService.deleteProduct(this.id).subscribe({
      next: product=> {
          this.product = product;
          alert('Product deleted successfully!');
          this.router.navigate(['/products']);
        },
        error: err => 
        {
          alert("Error occured while deleting the product. Please try again later");
          this.errorMessage = err;
          console.log(err);
          this.router.navigate(['/products']);
        }
      });
  }


}
