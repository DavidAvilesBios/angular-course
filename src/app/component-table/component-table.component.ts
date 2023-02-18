import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit,OnDestroy, OnChanges {

  @Input() products = [];
  @Output() addRow: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log('se corrio ngoninit primero')
  }

  ngOnDestroy(): void {
    console.log('se corrio ngondestroy al final ')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('se corrio ngonchanges primero')
  }


}
