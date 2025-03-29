import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingChartComponent } from './room-booking-chart.component';

describe('RoomBookingChartComponent', () => {
  let component: RoomBookingChartComponent;
  let fixture: ComponentFixture<RoomBookingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
