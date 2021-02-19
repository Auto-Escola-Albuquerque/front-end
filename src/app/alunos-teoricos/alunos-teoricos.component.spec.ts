import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosTeoricosComponent } from './alunos-teoricos.component';

describe('AlunosTeoricosComponent', () => {
  let component: AlunosTeoricosComponent;
  let fixture: ComponentFixture<AlunosTeoricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosTeoricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosTeoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
