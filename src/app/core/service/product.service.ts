import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(page: number,search: string) {
    return this.http.get(`${environment.BASE_URL}/products/findPage?search=${search}&page=${page}`).pipe(map(this.extractData));
  }

  extractData(res) {
    const body = res;
    return body;
  }
}