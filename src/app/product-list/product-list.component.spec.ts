import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
    }];
    fixture.detectChanges();
    component.setElevation(0);
    const compiled = fixture.debugElement.query(By.css('mat-card'));
    const mouseHover = new MouseEvent('hover');
    compiled.nativeElement.dispatchEvent(mouseHover);

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.mat-elevation-z3 mat-card-content p span')).nativeElement.innerText
    ).toEqual('test');
  });

  it('should changePage', () => {
    component.currentPage = 1;
    component.pages = 5
    
    component.changePage(0);
    expect(component.currentPage).toEqual(1);

    component.changePage(6);
    expect(component.currentPage).toEqual(5);

    component.changePage(3);
    expect(component.currentPage).toEqual(3);
  });
});
