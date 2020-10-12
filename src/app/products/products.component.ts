import { Product } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() producto : Product;

  @Output() productClicked : EventEmitter<any> = new EventEmitter();
  
  listaProducts = [{
    id: "1",
    title: "Producto Nombre",
    price: 9999,
    descripcion: "Descripcion del producto",
    image: "/assets/products/drink1.jpg"
  },
  {
    id: "2",
    title: "Producto Nombre Segundo",
    price: 9999,
    descripcion: "Descripcion del producto II",
    image: "/assets/products/drink2.jpg"
  },
  {
    id: "3",
    title: "Producto Nombre Tercero",
    price: 9999,
    descripcion: "Descripcion del producto III",
    image: "/assets/products/drink3.jpg"
  },
  {
    id: "4",
    title: "Producto Nombre Cuarto",
    price: 9999,
    descripcion: "Descripcion del producto IV",
    image: "/assets/products/drink4.jpg"
  }];
}
