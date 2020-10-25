import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from "@angular/core/testing";
import { ProductService } from 'src/app/core/service';

describe('ProductService Integration', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ProductService],
        imports: [HttpClientModule]
      });
    });
  
    it('should searchProduct', ( inject([HttpClient, ProductService], (http: HttpClient, svc: ProductService) => {
      spyOn(http, 'get').and.callThrough();
  
      svc.getProducts(0,'assa').subscribe(
        (product: any) => {
          expect(product.content.length).toEqual(4);
        }
      );
  
      expect(http.get).toHaveBeenCalled();
    })));
  
    it('should searchProduct all', ( inject([HttpClient, ProductService], (http: HttpClient, svc: ProductService) => {
        spyOn(http, 'get').and.callThrough();
    
        svc.getProducts(0,'').subscribe(
          (product: any) => {
            expect(product.content.length).toEqual(24);
          }
        );
    
        expect(http.get).toHaveBeenCalled();
      })));

      it('should not searchProduct', ( inject([HttpClient, ProductService], (http: HttpClient, svc: ProductService) => {
        spyOn(http, 'get').and.callThrough();
    
        svc.getProducts(0,'te').subscribe(
          (product: any) => {
            expect(product.content.length).toEqual(0);
          }
        );
    
        expect(http.get).toHaveBeenCalled();
      })));
  });