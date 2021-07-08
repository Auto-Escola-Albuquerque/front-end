import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficTicketComponent } from './traffic-ticket.component';

describe('TrafficTicketComponent', () => {
  let component: TrafficTicketComponent;
  let fixture: ComponentFixture<TrafficTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
