import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  numero:number = 0;

  sumarNumero(){
    this.numero+= 1;
  }

  restarNumero(){
    this.numero-= 1;
  }
}


