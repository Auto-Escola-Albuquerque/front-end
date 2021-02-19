import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFranquiasComponent } from './admin-franquias.component';

describe('AdminFranquiasComponent', () => {
  let component: AdminFranquiasComponent;
  let fixture: ComponentFixture<AdminFranquiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFranquiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
