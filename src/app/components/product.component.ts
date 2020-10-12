import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-productv1',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {


    @Input() producto : Product;

    @Output() productClicked : EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log("agregado al carrito el producto");
        this.productClicked.emit(this.producto);
    }
    /* = [{
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
      }]*/
}