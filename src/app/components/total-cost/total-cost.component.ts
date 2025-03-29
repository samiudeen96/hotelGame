import { ChangeDetectorRef, Component, Injectable, NgZone, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {
  anim: any;
  startValue = 0;
  endValue = 0;
  currentNumber = 1000;

  constructor(public service: MainService, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  animateNumber() {
    this.startValue = this.currentNumber;
    this.endValue = this.service.total_cost;

    this.ngZone.runOutsideAngular(() => {
      this.anim = setInterval(() => {
        this.startValue += 5;
        console.log(this.startValue, this.endValue);
        this.cdr.detectChanges();
        if (this.startValue >= this.endValue) {
          this.startValue = this.service.total_cost;
          clearInterval(this.anim);
        }
      }, 10);
    });
  }

}