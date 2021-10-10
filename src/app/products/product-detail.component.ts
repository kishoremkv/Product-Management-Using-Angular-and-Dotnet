import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  pageTitle="Product Detail"
  product: IProduct | undefined;
  ngOnInit(): void {
    console.log(this.route.snapshot);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`: ${id}`;
  }

  onBack()
  {
    this.router.navigate(['/products']);
  }

}
