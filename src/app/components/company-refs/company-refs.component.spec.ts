import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRefsComponent } from './company-refs.component';

describe('CompanyRefsComponent', () => {
  let component: CompanyRefsComponent;
  let fixture: ComponentFixture<CompanyRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
