import { Component, OnInit } from '@angular/core';
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private servicioComponent: ObtenerdatosService) { }

  public tarjetas:any = []

  ngOnInit(): void {
    this.tarjetas = this.servicioComponent.obtenerTarjetas();
  }

}
