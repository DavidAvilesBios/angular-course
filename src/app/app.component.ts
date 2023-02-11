import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Node';
  numero:number = 5;
  numero2:number = 10;
  cadena1:string = "hola ";
  cadena2:string = "mundo";
  cadena3:string = "";
  resultado:number = 0;
  sumar(){
    this.resultado = this.numero + this.numero2;
  }

  restar(){
    this.resultado = this.numero - this.numero2;
  }

  dividir(){
    if(this.numero === 0 || this.numero2 === 0){
      console.log("Error");
    }
    else{
      this.resultado = this.numero / this.numero2;
    } 
  }

  multiplicar(){
    this.resultado = this.numero * this.numero2;
  }

  sumarCadenas(){
    this.cadena3 = this.cadena1 + this.cadena2;
  }
  restablecer(){
    this.resultado = 0;
    this.cadena3 = "";
  }
}
