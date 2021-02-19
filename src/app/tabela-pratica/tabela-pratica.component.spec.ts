import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPraticaComponent } from './tabela-pratica.component';

describe('TabelaPraticaComponent', () => {
  let component: TabelaPraticaComponent;
  let fixture: ComponentFixture<TabelaPraticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPraticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
