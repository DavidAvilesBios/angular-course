import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styles: [
  ]
})
export class TablaAlumnosComponent implements OnInit {
  constructor(
    private _obtenerDatosService: ObtenerdatosService,
    private _router: Router,
  ) { }

  get alumnos() {
    return this._obtenerDatosService.obtenerAlumnos();
  };

  ngOnInit(): void {
  }

  agregarAlumno() {
    this._router.navigate(['/alumno']);
  }

  editarAlumno(id: number) {
    this._router.navigate(['/alumno', id]);
  }

  eliminarAlumno(id: number) {
    this._obtenerDatosService.eliminarAlumno(id);
  }
}
