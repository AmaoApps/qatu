import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'qatu-pwa';
  hello = 'Hola Uli!';
  listaNombres = ['Ulises', 'Vanessa', 'Hector', 'Aroyit'];

  addItem(){
    this.listaNombres.push('Nuevo Item');
  }

  deleteItem(index: number){
    this.listaNombres.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('producto');
    console.log(id);
  }


}
