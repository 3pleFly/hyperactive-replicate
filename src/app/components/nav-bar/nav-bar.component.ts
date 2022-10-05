import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  show(hamburgerDiv: HTMLElement, menuDiv: HTMLElement) {
    menuDiv.classList.toggle('active');
    hamburgerDiv.classList.toggle('active');
  }

  showCareers(careerDiv: HTMLElement) {
    careerDiv.classList.toggle('active_careers');
  }
}
