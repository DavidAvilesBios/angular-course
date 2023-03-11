import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerdatosService {

  constructor() { }

  obtenerTarjetas(){
    let tarjetas = [{
       titulo: 'Tarjeta 1',
       subtitulo: 'Tarjeta 1 subtitulo',
       cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      titulo: 'Tarjeta 1',
      subtitulo: 'Tarjeta 1 subtitulo',
      cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
   },
   {
    titulo: 'Tarjeta 1',
    subtitulo: 'Tarjeta 1 subtitulo',
    cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
 },
 {
  titulo: 'Tarjeta 1',
  subtitulo: 'Tarjeta 1 subtitulo',
  cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
}]

return tarjetas;
  }
}
