import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    'selector': 'pm-products',
    'templateUrl':'./product-list.component.html',
    'styleUrls':['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit
{

  constructor(private productService: ProductService)
  {

  }
    pageTitle = "Product List";
    products: IProduct[]=[];
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
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
      console.log("on init method");
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }
    
    onRatingClicked(message: string)
    {
      this.pageTitle = "Product List "+ message;
    }
}