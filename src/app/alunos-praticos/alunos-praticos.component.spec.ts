import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosPraticosComponent } from './alunos-praticos.component';

describe('AlunosPraticosComponent', () => {
  let component: AlunosPraticosComponent;
  let fixture: ComponentFixture<AlunosPraticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosPraticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosPraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
