import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosBajosComponent } from './precios-bajos.component';

describe('PreciosBajosComponent', () => {
  let component: PreciosBajosComponent;
  let fixture: ComponentFixture<PreciosBajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosBajosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosBajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
