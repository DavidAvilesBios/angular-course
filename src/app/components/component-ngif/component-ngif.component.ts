import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ngif',
  templateUrl: './component-ngif.component.html',
  styleUrls: ['./component-ngif.component.css']
})
export class ComponentNgifComponent implements OnInit {

  @Input() numero?: number;
  @Input() numero2?: number;

  constructor() { }

  ngOnInit(): void {}

}

