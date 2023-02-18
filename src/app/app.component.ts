
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  eliminarFila(){
    const fila = this.products.pop();
    console.log(fila);
  }
  addProduct(mensaje) {
    console.log(mensaje);
    const newProduct = {
      code: this.products.length,
      name: 'New Product',
      category: 'Uncategorized',
      quantity: (Math.floor(Math.random() * 10))
    };
    this.products.push(newProduct);
  }

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
    }

  ]
  
 
}


