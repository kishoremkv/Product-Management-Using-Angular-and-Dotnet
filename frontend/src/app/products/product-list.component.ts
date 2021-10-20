import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    'selector': 'pm-products',
    'templateUrl':'./product-list.component.html',
    'styleUrls':['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy
{

  constructor(private productService: ProductService)
  {

  }
    pageTitle = "Product List";
    products: IProduct[]=[];
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = 'Error occured';
    sub: Subscription| undefined;

    private _listFilter: string='';

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter(value);
      console.log(this.filteredProducts);
    }
    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }

    filteredProducts:IProduct[] = [];
    
    performFilter(value: string): IProduct[]
    {
      return this.products.filter(
        (product: IProduct)=> 
        {
          // console.log(product.productName.toLowerCase().includes(value));
          return product.productName.toLowerCase().includes(value.toLowerCase());
        });
      }
    ngOnInit(): void
    {
      console.log("on init product-list-component");
      this.sub = this.productService.getProducts().subscribe({
        next: products=> {
            this.products= products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
      });
    }
    
    ngOnDestroy():void
    {
      this.sub?.unsubscribe();
    }
    onRatingClicked(message: string)
    {
      this.pageTitle = "Product List "+ message;
    }
}