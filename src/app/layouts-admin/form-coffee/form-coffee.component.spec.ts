import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoffeeComponent } from './form-coffee.component';

describe('FormCoffeeComponent', () => {
  let component: FormCoffeeComponent;
  let fixture: ComponentFixture<FormCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
