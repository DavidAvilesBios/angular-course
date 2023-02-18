import { Component, Input,OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  constructor() { }
  @Input() products  = [];
  @Output() addRow: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
  }
}
