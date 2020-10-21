import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setElevation', () => {
    component.products = [{
      "id": 4,
      "brand": "test",
      "description": "test",
      "image": "www.lider.cl/catalogo/images/computerIcon.svg",
      "price": 890348
    }]
    fixture.detectChanges();
    component.setElevation(0);
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('.mat-elevation-z3 mat-card-content p').textContent).toContain('test');
  });
});
