import { AfterContentInit, Component, OnInit } from '@angular/core';

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

  toHome(): void {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toWhyUs(): void {
    document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toPsa(): void {
    document.getElementById('psa')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toCompanyRefs(): void {
    document.getElementById('company-refs')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toAboutUs(): void {
    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toProcessDetails(): void {
    document.getElementById('process-details')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }

  toFaq(): void {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); // window.scroll(0, destination);
  }
}
