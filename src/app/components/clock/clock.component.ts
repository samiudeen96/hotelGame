import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() clock: any;

  constructor(public service: MainService) { }

  ngOnInit(): void {
    this.getZone()
  }


  getZone() {
    setInterval(() => {
      const now = moment().tz(this.clock.zone);
      const hours = now.hours();
      const minutes = now.minutes();
      const seconds = now.seconds();

      this.clock.hourHandTransform = `rotate(${(hours % 12) * 30 + (minutes / 60) * 30}deg)`;
      this.clock.minuteHandTransform = `rotate(${minutes * 6}deg)`;
      this.clock.secondHandTransform = `rotate(${seconds * 6}deg)`;
    }, 1000);
  }


}