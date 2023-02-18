import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {
  @Input() products: ProductInterface[] = [];
  @Output() onAgregarFila = new EventEmitter<ProductInterface>();
  @Output() onPopFila = new EventEmitter<ProductInterface>();

  constructor() { }

  ngOnInit(): void {
  }
}
