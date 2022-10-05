import { Component, HostListener, OnInit } from '@angular/core';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cta-bar',
  templateUrl: './cta-bar.component.html',
  styleUrls: ['./cta-bar.component.scss'],
})
export class CtaBarComponent implements OnInit {
  faHandPointUp = faHandPointUp;
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
