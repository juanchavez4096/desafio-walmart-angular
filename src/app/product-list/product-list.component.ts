import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { ProductDto } from '../model/ProductDto';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductDto[] = [] as any;
  activeProduct = -1;
  _currentSearch = '';
  pages: number = 1;
  currentPage: number = 1;

  @Input('currentSearch')
  set currentSearch(currentSearch: string) {
    this._currentSearch = currentSearch;
    this.searchProducts(0, this._currentSearch);
  }

  @Output() searchingEventEmiter = new EventEmitter<boolean>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searchProducts(0, "");
  }

  searchProducts(page: number, search: string) {
    this.searchingEventEmiter.emit(true);
    this.productService.getProducts(page, search).subscribe(product => {
      this.products = product.content;
      this.pages = product.totalPages === 0 ? 1 : product.totalPages;
      this.currentPage = page + 1;
      this.searchingEventEmiter.emit(false);
    }, error => {
      this.searchingEventEmiter.emit(false);
    })
  }

  setElevation(i: number): void {
    this.activeProduct = i;
  }

  changePage(newPage: number) {
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > this.pages) {
      newPage = this.pages;
    }
    if (this.currentPage !== newPage) {
      this.searchProducts(newPage - 1, this._currentSearch);
    }
  }
}
