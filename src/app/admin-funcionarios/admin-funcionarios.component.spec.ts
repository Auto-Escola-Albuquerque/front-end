import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFuncionariosComponent } from './admin-funcionarios.component';

describe('AdminFuncionariosComponent', () => {
  let component: AdminFuncionariosComponent;
  let fixture: ComponentFixture<AdminFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
