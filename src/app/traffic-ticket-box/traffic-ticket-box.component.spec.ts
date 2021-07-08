import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficTicketBoxComponent } from './traffic-ticket-box.component';

describe('TrafficTicketBoxComponent', () => {
  let component: TrafficTicketBoxComponent;
  let fixture: ComponentFixture<TrafficTicketBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficTicketBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficTicketBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
