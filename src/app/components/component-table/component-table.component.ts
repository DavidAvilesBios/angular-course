import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  constructor() { }
  @Input products  = [];
  ngOnInit(): void {
  }
}
