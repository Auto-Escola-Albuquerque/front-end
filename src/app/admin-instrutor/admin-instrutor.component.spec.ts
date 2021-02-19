import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstrutorComponent } from './admin-instrutor.component';

describe('AdminInstrutorComponent', () => {
  let component: AdminInstrutorComponent;
  let fixture: ComponentFixture<AdminInstrutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstrutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
