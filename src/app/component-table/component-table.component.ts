import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  @Input() products = [];
  @Output() agregarTd: EventEmitter<any> = new EventEmitter<any>()
  @Output() eliminarTd: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }
  ngOnInit(): void {
  }

}
