import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerOptionsComponent } from './career-options.component';

describe('CareerOptionsComponent', () => {
  let component: CareerOptionsComponent;
  let fixture: ComponentFixture<CareerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
