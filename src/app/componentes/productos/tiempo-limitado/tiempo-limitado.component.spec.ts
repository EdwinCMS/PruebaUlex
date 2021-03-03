import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoLimitadoComponent } from './tiempo-limitado.component';

describe('TiempoLimitadoComponent', () => {
  let component: TiempoLimitadoComponent;
  let fixture: ComponentFixture<TiempoLimitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoLimitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoLimitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
