import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-banner',
  templateUrl: './company-banner.component.html',
  styleUrls: ['./company-banner.component.scss'],
})
export class CompanyBannerComponent implements OnInit {
  @Input() banner: any;

  constructor() {}

  ngOnInit(): void {}
}
