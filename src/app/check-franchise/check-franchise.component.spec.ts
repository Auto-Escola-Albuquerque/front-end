import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFranchiseComponent } from './check-franchise.component';

describe('CheckFranchiseComponent', () => {
  let component: CheckFranchiseComponent;
  let fixture: ComponentFixture<CheckFranchiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFranchiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
