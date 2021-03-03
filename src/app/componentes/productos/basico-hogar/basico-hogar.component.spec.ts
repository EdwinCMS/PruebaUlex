import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicoHogarComponent } from './basico-hogar.component';

describe('BasicoHogarComponent', () => {
  let component: BasicoHogarComponent;
  let fixture: ComponentFixture<BasicoHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicoHogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicoHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
