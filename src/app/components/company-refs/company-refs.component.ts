import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-company-refs',
  templateUrl: './company-refs.component.html',
  styleUrls: ['./company-refs.component.scss']
})
export class CompanyRefsComponent implements OnInit {
  companyBanners = environment.banners;

  constructor() { }

  ngOnInit(): void {
  }

}
