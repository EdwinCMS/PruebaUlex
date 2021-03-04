import { ComponentFixture, TestBed } from '@angular/core/testing';

import { King2PromocionComponent } from './king2-promocion.component';

describe('King2PromocionComponent', () => {
  let component: King2PromocionComponent;
  let fixture: ComponentFixture<King2PromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ King2PromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(King2PromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
