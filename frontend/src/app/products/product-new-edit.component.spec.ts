import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewEditComponent } from './product-new-edit.component';

describe('ProductNewEditComponent', () => {
  let component: ProductNewEditComponent;
  let fixture: ComponentFixture<ProductNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
