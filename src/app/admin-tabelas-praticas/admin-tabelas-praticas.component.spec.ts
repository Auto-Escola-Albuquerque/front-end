import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTabelasPraticasComponent } from './admin-tabelas-praticas.component';

describe('AdminTabelasPraticasComponent', () => {
  let component: AdminTabelasPraticasComponent;
  let fixture: ComponentFixture<AdminTabelasPraticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTabelasPraticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTabelasPraticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
