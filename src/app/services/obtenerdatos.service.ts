import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerdatosService {

  constructor() { }

  obtenerTarjetas(){
    let tarjetas = [
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
      },
      {
        titulo: 'Tarjeta 1',
        subtitulo: 'Tarjeta 1 subtitulo',
        cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      }
    ];

    return tarjetas;
  };

  obtenerAlumnos(){
    const alumnos = JSON.parse(localStorage.getItem('alumnos'));
    return alumnos ? alumnos : [];
  };

  guardarAlumno(alumno){
    let alumnos = JSON.parse(localStorage.getItem('alumnos'));
    if(alumnos == null){
      alumnos = [];
    }
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }

  actualizarAlumno(alumnoActualizado){
    const alumnosDB = this.obtenerAlumnos();
    const nuevosAlumnos = alumnosDB.map(alumno => {
      if(alumno.id === alumnoActualizado.id){
        return alumnoActualizado;
      }
    });

    localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
  }

  eliminarAlumno(id){
    const alumnosDB = this.obtenerAlumnos();
    const nuevosAlumnos = alumnosDB.filter(alumno => alumno.id !== id);
    localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
  }
}
