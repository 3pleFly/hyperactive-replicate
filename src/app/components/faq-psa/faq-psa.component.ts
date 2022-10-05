import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq-psa',
  templateUrl: './faq-psa.component.html',
  styleUrls: ['./faq-psa.component.scss'],
})
export class FaqpsaComponent implements OnInit {
  qas = environment.qa;
  psas = environment.psa;
  innerWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
