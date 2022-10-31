import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhosComponent } from './carrinhos.component';

describe('CarrinhosComponent', () => {
  let component: CarrinhosComponent;
  let fixture: ComponentFixture<CarrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
