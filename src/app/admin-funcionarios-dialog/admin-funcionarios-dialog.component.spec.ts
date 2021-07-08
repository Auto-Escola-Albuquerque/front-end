import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFuncionariosDialogComponent } from './admin-funcionarios-dialog.component';

describe('AdminFuncionariosDialogComponent', () => {
  let component: AdminFuncionariosDialogComponent;
  let fixture: ComponentFixture<AdminFuncionariosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFuncionariosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFuncionariosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
