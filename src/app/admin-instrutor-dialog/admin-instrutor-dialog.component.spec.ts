import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstrutorDialogComponent } from './admin-instrutor-dialog.component';

describe('AdminFuncionarioDialogComponent', () => {
  let component: AdminInstrutorDialogComponent;
  let fixture: ComponentFixture<AdminInstrutorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstrutorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstrutorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
