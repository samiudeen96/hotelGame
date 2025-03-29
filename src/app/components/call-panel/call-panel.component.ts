import { Component, ElementRef, Injectable, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CoinComponent } from '../coin/coin.component';
import { HomeComponent } from 'src/app/home/home.component';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-call-panel',
  templateUrl: './call-panel.component.html',
  styleUrls: ['./call-panel.component.scss'],
  animations:[
    trigger('slideRight', [
      state('start', style({ transform: 'translateX(110%)' })),
      state('end', style({ transform: 'translateX(0)' })),
      transition('start => end', animate('0.5s ease-in-out')),
      transition('end => start', animate('0.5s ease-in-out')),
    ]),
  ]
})
export class CallPanelComponent implements OnInit {

  // shouldAutoplay: boolean = true;
  audioSource: string = 'assets/audio/ring.mp3'; // Change the path to your audio file
  audioSourceCoin: string = 'assets/audio/coin.mp3'
  // service.selectedCaller: any;
  callerContent: any;
  selectedContent = 'question';
  coinAudio: any;

  // @Input() com1ref: com1;

  constructor(private renderer: Renderer2, public service: MainService, public coin: CoinComponent, public total: TotalCostComponent) { }

  ngOnInit(): void {
    // for (let i = 0; i < 14; i++) {
    //   this.accept(i);
    //   // this.reject(i);
    // }
    // this.next(12);
    // setTimeout(()=>{
    //   this.service.selectedCaller < this.service.caller.length
    // },1000)
    // this.service.question = this.service.getQuestion(this.service.selectedCaller);
    this.service.animState = 'start'
  }

  accept(n: any) {

    let start_date = this.service.caller[n].start_date;
    let end_date = this.service.caller[n].booking;
    // this.service.activeFlip(n);

    // this.coin.method2();

    console.log(start_date, end_date);
    let selected_i = 0;
    for (let i = 0; i < 5; i++) {
      let filled = false;
      for (let j = start_date; j < start_date + end_date; j++) {
        // console.log(i, j, this.service.table[i][j].filled);
        if (this.service.table && this.service.table[i] && this.service.table[i][j].filled == true) {
          filled = true;
        }

      }
      if (filled == false) {
        selected_i = i;
        for (let k = start_date; k < start_date + end_date; k++) {
          // console.log(selected_i, k, this.service.table[selected_i][k].filled, start_date, end_date);
          this.service.table[selected_i][k].filled = true;
        }
        this.service.total_cost += this.service.room_cost * end_date;
        this.service.caller[n].accept = true;
        this.service.caller[n].shouldAutoplay = false;
        this.selectedContent = 'success';
        // this.coin.explode();
        this.explode();
        this.coinAudio = true;
        
        this.total.animateNumber();
        return;
      }
      // this.shouldAutoplay = false
    }
    this.selectedContent = 'not_allowed';

  }
  @ViewChild('explosionContainer', { static: false }) explosionContainer: ElementRef | undefined;
  explode() {
    const particles = 20;
    console.log("particles");
    if (this.explosionContainer) {
      const explosion = this.explosionContainer.nativeElement;
      this.renderer.setStyle(explosion, 'left', '-38px');
      this.renderer.setStyle(explosion, 'top', '-42px');

      const positionInfo = explosion.getBoundingClientRect();
      const height = positionInfo.height;
      const width = positionInfo.width;

      for (let i = 0; i < particles; i++) {
        // positioning x,y of the particle on the circle (little randomized radius)
        const x =
          height / 2 +
          this.rand(50, 90) *
          Math.cos((2 * Math.PI * i) / this.rand(particles - 10, particles + 10));
        const y =
          width / 2 +
          this.rand(50, 90) *
          Math.sin((2 * Math.PI * i) / this.rand(particles - 10, particles + 10));

        // particle element creation (could be anything other than div)
        const elm = this.renderer.createElement('div');
        this.renderer.setStyle(elm, 'backgroundColor', 'gold');
        this.renderer.setStyle(elm, 'left', x + 'px');
        this.renderer.setStyle(elm, 'top', y + 'px');
        this.renderer.addClass(elm, 'particle');
        this.renderer.appendChild(explosion, elm);
      }
    }
  }
  rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1)) + min;
  }

  reject(n: any) {
    this.selectedContent = 'reject';
    this.service.caller[n].shouldAutoplay = false;
  }

  callPanelShow: boolean = true;

  next(n: any) {
    this.callPanelShow = false;
    this.coinAudio = false
    // this.service.animState = 'end'
    // for (this.service.selectedCaller; this.service.selectedCaller < this.service.caller.length; this.service.selectedCaller++) {
    setTimeout(() => {
      this.callPanelShow = true;
      this.service.selectedCaller = n + 1;
      console.log(this.service.selectedCaller)
      this.selectedContent = 'question';
      this.service.question = this.service.getQuestion(this.service.selectedCaller);
      this.service.caller[n].shouldAutoplay = true;
      // this.service.animState = "end";
    }, 2000)
    // }
  }
}
