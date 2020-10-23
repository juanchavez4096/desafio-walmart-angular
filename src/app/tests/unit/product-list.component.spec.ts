import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { defer, Observable } from 'rxjs';
import { ProductDto } from 'src/app/model/ProductDto';
import { CoreModule } from '../../core/core.module';
import { ProductService } from '../../core/service';

import { ProductListComponent } from '../../product-list/product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  let componentService: ProductService;

  let productMock : ProductDto = {
    id : 1,
    brand: "test",
    description: "test",
    discount: 0,
    image: "http://test/image.jpg",
    price: 5000,
    priceDiscount: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ProductListComponent],
      providers: [ProductService]
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
      id: 4,
      brand: "test",
      description: "test",
      image: "www.lider.cl/catalogo/images/computerIcon.svg",
      price: 890348,
      discount: 0,
      priceDiscount: 0
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
    const valueServiceSpy =
      jasmine.createSpyObj('ProductService', ['getProducts', 'subscribe']);
    

    // set the value to return when the `getValue` spy is called.
    const stubValue = Promise.reject();
    valueServiceSpy.getProducts.and.returnValue(stubValue);

    component = new ProductListComponent(valueServiceSpy);

    spyOn(component, 'searchProducts');

    component.currentPage = 1;
    component.pages = 5

    component.changePage(0);
    expect(component.currentPage).toEqual(1);

    component.changePage(6);
    expect(component.searchProducts).toHaveBeenCalledWith(5 - 1, component._currentSearch)

    component.changePage(3);
    expect(component.searchProducts).toHaveBeenCalledWith(3 - 1, component._currentSearch)
  });

  it('should searchProduct', () => {
    component.products = [];
    componentService = TestBed.inject(ProductService);
    spyOn(componentService, 'getProducts').and.returnValue(defer(() => Promise.resolve({content: [productMock], totalPages: 5})));
    spyOn(component, 'searchProducts').and.callThrough();;

    component.searchProducts(0, '');
    
    expect(component.searchProducts).toHaveBeenCalled()
  });

  it('should searchProduct with no pages', () => {
    component.products = [];
    componentService = TestBed.inject(ProductService);
    spyOn(componentService, 'getProducts').and.returnValue(defer(() => Promise.resolve({content: [productMock], totalPages: 0})));
    spyOn(component, 'searchProducts').and.callThrough();;

    component.searchProducts(0, '');
    expect(component.searchProducts).toHaveBeenCalled()
  });

  it('should not searchProduct: Error', () => {
    component.products = [];
    componentService = TestBed.inject(ProductService);
    spyOn(componentService, 'getProducts').and.returnValue(defer(() => Promise.reject({content: [productMock], totalPages: 5})));
    spyOn(component, 'searchProducts').and.callThrough();

    component.searchProducts(0, '');
    expect(component.searchProducts).toHaveBeenCalled()
  });

  it('should changeCurrentSearch', () => {
    spyOn(component, 'searchProducts').and.callFake(() => null);
    component.currentSearch = 'test';
    expect(component._currentSearch).toBe('test');
  });

  it('should extractData', () => {
    componentService = TestBed.inject(ProductService);
    
    expect(componentService.extractData({})).toEqual({});
  });

  



});

