import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componnent-table',
  templateUrl: './componnent-table.component.html',
  styleUrls: ['./componnent-table.component.css']
})
export class ComponnentTableComponent implements OnInit {

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
      name: 'Mirinda',
      category: 'Refresco',
      quantity: 12
    },
    {
      code: 3,
      name: 'Coca cola Zero',
      category: 'Refresco',
      quantity: 12
    }
  ]

}
