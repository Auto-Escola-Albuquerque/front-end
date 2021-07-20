import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorClassDialogComponent } from './instructor-class-dialog.component';

describe('InstructorClassDialogComponent', () => {
  let component: InstructorClassDialogComponent;
  let fixture: ComponentFixture<InstructorClassDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorClassDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
