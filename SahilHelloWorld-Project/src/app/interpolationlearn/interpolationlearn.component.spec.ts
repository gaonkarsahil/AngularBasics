import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationlearnComponent } from './interpolationlearn.component';

describe('InterpolationlearnComponent', () => {
  let component: InterpolationlearnComponent;
  let fixture: ComponentFixture<InterpolationlearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationlearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
