import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  currentProduct
  activeProduct = -1;
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

  setElevation(i: number){
    this.activeProduct = i;
  }
}
