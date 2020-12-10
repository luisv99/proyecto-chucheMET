import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoZPComponent } from './pago-zp.component';

describe('PagoZPComponent', () => {
  let component: PagoZPComponent;
  let fixture: ComponentFixture<PagoZPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoZPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoZPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
