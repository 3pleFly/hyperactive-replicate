import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
})
export class ProcessDetailsComponent implements OnInit {
  processString = environment.process;

  constructor() {}

  ngOnInit(): void {}

  show(accordionDiv: HTMLDivElement, toggleIcon: HTMLElement) {
    accordionDiv.classList.toggle('active');
    toggleIcon.classList.toggle('rotate');
  }
}
