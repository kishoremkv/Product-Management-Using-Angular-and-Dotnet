import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductNewEditComponent } from './product-new-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductNewEditComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {path:'products',component: ProductListComponent},
        {
          path: 'product/:id',
          component: ProductDetailComponent,
          canActivate:[ProductDetailGuard]
        },
        {
          path: 'edit-product/:id',
          component: ProductEditComponent,
          canActivate:[ProductDetailGuard]
        },
        {
          path: 'add-product',
          component: ProductNewEditComponent
        }
      ]
    ),
    SharedModule
  ]
})
export class ProductModule { }
