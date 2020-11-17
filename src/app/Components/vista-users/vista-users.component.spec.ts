import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsersComponent } from './vista-users.component';

describe('VistaUsersComponent', () => {
  let component: VistaUsersComponent;
  let fixture: ComponentFixture<VistaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
