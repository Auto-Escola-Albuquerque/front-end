import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorTeoricoComponent } from './instrutor-teorico.component';

describe('InstrutorTeoricoComponent', () => {
  let component: InstrutorTeoricoComponent;
  let fixture: ComponentFixture<InstrutorTeoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrutorTeoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrutorTeoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
