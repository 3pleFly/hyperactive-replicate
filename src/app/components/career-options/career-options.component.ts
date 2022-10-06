import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-career-options',
  templateUrl: './career-options.component.html',
  styleUrls: ['./career-options.component.scss']
})
export class CareerOptionsComponent implements OnInit {
  formTitle: string = '?רוצה לשמוע עוד';
  careers = environment.careers;
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
