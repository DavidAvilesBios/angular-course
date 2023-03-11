import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      code: 1,
      name: 'Coca cola',
      category: 'Refresco',
      quantity: 12
    },
    {
      code: 2,
      name: 'Caguama',
      category: 'Refresco',
      quantity: 10
    },
    {
      code: 3,
      name: 'Fanta',
      category: 'Refresco',
      quantity: 8
    }
  ]

}
