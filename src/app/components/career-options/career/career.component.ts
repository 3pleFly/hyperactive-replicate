import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() lineColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
