import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  alumno: alumno = new alumno();
  alumnos: Array<alumno> = new Array<alumno>();

  constructor() { 
    this.alumnos = JSON.parse(localStorage.getItem('alumnos') || '[]');
  }

  ngOnInit(): void {
  }


  guardarAlumno() {
    console.log(this.alumno);
    this.alumno.id = this.alumnos.length > 0 ? this.alumnos[this.alumnos.length-1].id + 1 : 1;
    this.alumnos.push(this.alumno);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    console.log(this.alumnos);

    this.alumno = JSON.parse(JSON.stringify(this.alumno))
  }


}
