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
    component.products = [{id: 1, name: "test"}]
    fixture.detectChanges();
    component.setElevation(1);
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('.mat-elevation-z4 mat-card-content p').textContent).toContain('test');
  });
});
