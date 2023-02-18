import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() products=[];
  
 
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();
  
  


  constructor() { }

  ngOnInit(): void {
  }
 

  
}


