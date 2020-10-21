import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  activeProduct = -1;
  currentSearch: string;
  pages: number = 4;
  currentPage: number = 1;
  
  constructor() { }

  ngOnInit(): void {
    this.products = [{
      "id": 1,
      "brand": "ooy eqrceli",
      "description": "rlñlw brhrka",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 498724
    },
    {
      "id": 2,
      "brand": "dsaasd",
      "description": "zlrwax bñyrh",
      "image": "www.lider.cl/catalogo/images/babyIcon.svg",
      "price": 130173
    },
    {
      "id": 3,
      "brand": "weñxoab",
      "description": "hqhoy qacirk",
      "image": "www.lider.cl/catalogo/images/homeIcon.svg",
      "price": 171740
    },
    {
      "id": 4,
      "brand": "sjlzxeo",
      "description": "pnyn rlxbewnk",
      "image": "www.lider.cl/catalogo/images/computerIcon.svg",
      "price": 890348
    }];
  }

  setElevation(i: number): void{
    this.activeProduct = i;
  }

  changePage(newPage: number){
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > this.pages) {
      newPage = this.pages;
    }
    if (this.currentPage !== newPage) {
      this.currentPage = newPage; 
    }
  }
}
