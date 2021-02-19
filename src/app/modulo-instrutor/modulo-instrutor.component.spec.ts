import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInstrutorComponent } from './modulo-instrutor.component';

describe('ModuloInstrutorComponent', () => {
  let component: ModuloInstrutorComponent;
  let fixture: ComponentFixture<ModuloInstrutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInstrutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
