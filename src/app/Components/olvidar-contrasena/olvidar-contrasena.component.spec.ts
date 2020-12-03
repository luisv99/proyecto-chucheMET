import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarContrasenaComponent } from './olvidar-contrasena.component';

describe('OlvidarContrasenaComponent', () => {
  let component: OlvidarContrasenaComponent;
  let fixture: ComponentFixture<OlvidarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
