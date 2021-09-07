import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFranquiasDialogComponent } from './admin-franquias-dialog.component';

describe('AdminFranquiasDialogComponent', () => {
  let component: AdminFranquiasDialogComponent;
  let fixture: ComponentFixture<AdminFranquiasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFranquiasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFranquiasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
