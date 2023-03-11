import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  numeros = [1,2,3,4,5,6,7,8,9,10];

  numero:number = 0;
  numero2:number = 0;

  products = [
    {
      code: 1,
      name: 'Coca cola',
      category: 'Refresco',
      quantity: 12
    },
    {
      code: 2,
      name: 'Mirinda',
      category: 'Refresco',
      quantity: 12
    },
    {
      code: 3,
      name: 'Coca cola Zero',
      category: 'Refresco',
      quantity: 12
    },
  ]
  
  sumarNumero(){
    this.numero+= 1;
  }

  restarNumero(){
    this.numero-= 1;
  }

  sumarNumero2(){
    this.numero2+= 1;
  }

  restarNumero2(){
    this.numero2-= 1;
  }
   crearNumeros(){
     let numeros = [1,2,3,4,5,6,7,8,9]
     return numeros;
  }
  agregarTd(mensaje){
    console.log(mensaje);
    let nuevo = {
      code: this.products.length + 1,
      name: 'a',
      category: 'a',
      quantity: Math.random()
    };
    this.products.push(nuevo);
  }
  eliminarTd(mensaje){
    console.log(mensaje);
    this.products.pop();
  }
}
