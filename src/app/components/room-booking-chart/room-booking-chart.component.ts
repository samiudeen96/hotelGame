import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-room-booking-chart',
  templateUrl: './room-booking-chart.component.html',
  styleUrls: ['./room-booking-chart.component.scss']
})
export class RoomBookingChartComponent implements OnInit {


  @Input() data: any[] = [];

  @Input() table: any[] = [];

  constructor(public service: MainService) { }

  ngOnInit(): void {

  }

}
