import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  alumno: alumno = new alumno();
  alumnos: Array<alumno> = new Array<alumno>();
  constructor() { 
    this.alumnos = JSON.parse(localStorage.getItem('alumnos') || '[]');
  }

  ngOnInit(): void {
  }

  editarAlumno(alumno: alumno) {
    this.alumno = alumno;
  }

  eliminarAlumno(alumno: alumno) {
    console.log(alumno);
    this.alumnos = this.alumnos.filter(a => a.id == alumno.id);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    console.log(localStorage);
  }
}
