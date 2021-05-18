import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlunosDialogComponent } from './admin-alunos-dialog.component';

describe('AdminAlunosDialogComponent', () => {
  let component: AdminAlunosDialogComponent;
  let fixture: ComponentFixture<AdminAlunosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlunosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlunosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
