import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { alumno } from 'src/app/models/alumno';
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  
  private _id?: string | number;
  public alumno: alumno = new alumno();

  get titulo() {
    return this._id ? 'Editar alumno' : 'Agregar alumno';
  }

  constructor(
    private _obtenerDatosSerive: ObtenerdatosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      if(params.id){
        this._id = params.id;
        const alumno = this._obtenerDatosSerive.obtenerAlumnos().find(alumno => alumno.id == params.id);

        if ( alumno ) {
          this.alumno = alumno;
        } else {
          this.alumno = new alumno();
          console.error('No se encontró el alumno');
        }
      }
    });
  }

  guardarAlumno() {
    if ( this.form.invalid ) { return; }

    if ( this._id ) {
      this._obtenerDatosSerive.actualizarAlumno(this.alumno);
    } else {
      const nuevoId = (this._obtenerDatosSerive.obtenerAlumnos().length || 0) + 1;
      this.alumno.id = nuevoId;
      this.alumno = JSON.parse(JSON.stringify(this.alumno))
      this._obtenerDatosSerive.guardarAlumno(this.alumno);
    }

    this._router.navigate(['/alumnos']);
  }

  cancelar() {
    this._router.navigate(['/alumnos']);
  }
}
