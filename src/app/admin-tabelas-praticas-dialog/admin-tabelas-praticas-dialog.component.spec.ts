import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTabelasPraticasDialogComponent } from './admin-tabelas-praticas-dialog.component';

describe('AdminTabelasPraticasDialogComponent', () => {
  let component: AdminTabelasPraticasDialogComponent;
  let fixture: ComponentFixture<AdminTabelasPraticasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTabelasPraticasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTabelasPraticasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
