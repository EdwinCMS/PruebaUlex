import { ComponentFixture, TestBed } from '@angular/core/testing';

import { King1ProductoComponent } from './king1-producto.component';

describe('King1ProductoComponent', () => {
  let component: King1ProductoComponent;
  let fixture: ComponentFixture<King1ProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ King1ProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(King1ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
