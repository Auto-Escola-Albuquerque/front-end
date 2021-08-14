import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassesDialogComponent } from './admin-classes-dialog.component';

describe('AdminClassesDialogComponent', () => {
  let component: AdminClassesDialogComponent;
  let fixture: ComponentFixture<AdminClassesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
