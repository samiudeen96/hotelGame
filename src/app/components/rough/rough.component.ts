
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, NgZone, AfterViewInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs/internal/observable/timer';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { MainService } from 'src/app/services/main.service';
// import { AnimationBuilder, style, animate } from '@angular/animations';

// import { Component, OnInit, Input } from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.scss'],
  animations: [

    trigger('zoomIn', [
      state('void', style({ transform: 'scale(0)' })),
      transition('void => *', animate('300ms ease-in-out')),
    ]),

    trigger('slide', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('300ms ease-in')),
      transition('* => void', animate('300ms ease-out'))
    ]),

    // trigger('ringing', [
    //   state('ring', style({ transform: 'translateX(10px)' })),
    //   state('stop', style({ transform: 'translateX(0)' })),
    //   transition('stop => ring', animate('0.5s')),
    //   transition('ring => stop', animate('0s')),
    // ]),

    trigger('ringing', [
      state('ring', style({ animation: 'ring 1s infinite' })),
      state('stop', style({ transform: 'scale(1)' })),
      transition('stop => ring', animate('0s')),
      transition('ring => stop', animate('0s')),
    ]),

    trigger('slideRight', [
      state('start', style({ transform: 'translateX(0)', animate: 'start 3s' })),
      state('end', style({ transform: 'translateX(-100%)' })),
      transition('start => end', animate('0.5s ease-in-out')),
      transition('end => start', animate('0.5s ease-in-out')),
    ]),

    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
    trigger('numberAnimation', [
      state('void', style({ transform: 'translateY(100%)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms', style({ transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('numberChange', [
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':increment', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('count', [
      state('in', style({ transform: 'scale(1)' })),
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms ease-out')
      ])
    ])

    // trigger(
    //   'modalFadeZoom',
    //   [
    //     transition(
    //       ':enter', [
    //         style({ transform: 'translateX(-50%) translateY(-50%) scale(.7)', opacity: 0 }),
    //         animate('0.3s', style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' })),
    //       ]
    //     ),
    //     transition(
    //       ':leave', [
    //         style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' }),
    //         animate('5.3s', style({ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(.7)' })),
    //       ]
    //     ),
    //   ])

    // trigger('zoomIn', [
    //   state('normal', style({ transform: 'scale(1)' })),
    //   state('zoomed', style({ transform: 'scale(1.2)' })),
    //   transition('normal => zoomed', animate('300ms ease-in')),
    //   transition('zoomed => normal', animate('300ms ease-out')),
    // ]),
    //     trigger('zoom', [
    //   state('initial', style({ transform: 'scale(1)' })),
    //   state('zoomed', style({ transform: 'scale(1.5)' })),
    //   transition('initial => zoomed', animate('300ms ease-in-out')),
    //   transition('zoomed => initial', animate('300ms ease-in-out')),
    // ]),
  ]
})
export class RoughComponent implements OnInit {
  constructor(private elementRef: ElementRef, private ngZone: NgZone, private renderer: Renderer2, public service: MainService) { }
  showModal: boolean = false;
  // animationState = 'in';

  // constructor(private animationBuilder: AnimationBuilder) {}

  // zoomInAnimation(element: HTMLElement) {
  //   const animation = this.animationBuilder.build([
  //     style({ transform: 'scale(1)', display: 'none' }),
  //     animate('300ms', style({ transform: 'scale(5)', display: 'block' })),
  //   ]);

  //   const player = animation.create(element);
  //   player.play();
  // }




  // ngOnInit(): void {
  //   this.showModal = true;

  //   setTimeout(() => {
  //     this.animationState = 'end';

  //   }, 1000)
  // }


  zoomState = 'initial';

  toggleZoom() {
    this.zoomState = 'zoomed';
  }


  // animationState: string = '';

  // Function to trigger slide-in animation
  slideIn() {
    // this.animationState = 'in';
  }

  // Function to trigger slide-out animation
  slideOut() {
    // this.animationState = 'out';
  }


  shouldAutoplay: boolean = true;
  audioSource: string = 'assets/audio/ring.mp3'; // Change the path to your audio file

  // // Function to toggle autoplay
  // toggleAutoplay() {
  //   this.shouldAutoplay = !this.shouldAutoplay;
  // }


  // ringingState = 'ring';

  // toggleRinging() {
  //   this.ringingState = this.ringingState === 'ring' ? 'stop' : 'ring';
  // }


  ringingState = 'ring';

  toggleRinging() {
    this.ringingState = this.ringingState === 'ring' ? 'stop' : 'ring';
  }


  animationState = 'start';

  // toggleAnimation() {
  //   this.animationState = this.animationState === 'start' ? 'end' : 'start';
  // }

  newValue: string = '';


  values: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addValue(value: string) {
    this.values.push(value);
  }

  removeValue(index: number) {
    this.values.splice(index, 1);
  }

  @ViewChild('explosionContainer', { static: false }) explosionContainer: ElementRef | undefined;

  explode() {
    const particles = 20;

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

  numberToAnimate = 0; // Initial value

  // Function to trigger the animation and update the number
  // animateNumber() {
  //   this.numberToAnimate += 10; // You can update this with your desired logic
  // }
  // numbers: number[] = [0, 1, 2, 3, 4, 5]; // An array of numbers to display





  // @ViewChild('value') valueElement: ElementRef | undefined;

  // ngOnInit() {
  //   // Simulate changing numbers
  //   setInterval(() => {
  //     this.numbers = this.numbers.map((number) => number + 1);
  //   }, 1000);


  //   this.animateValue(this.valueElement?.nativeElement, 0, this.service.total_cost, 1000);

  //   setTimeout(() => {
  //     this.ngZone.run(() => {
  //       this.animateValue(this.valueElement?.nativeElement, 100, this.service.total_cost, 1000);
  //     });
  //   }, 300);
  // }


  // animateValue(element: HTMLElement, start: number, end: number, duration: number) {
  //   let startTimestamp: number | null = null;

  //   const step = (timestamp: number) => {
  //     if (!startTimestamp) startTimestamp = timestamp;
  //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //     const animatedValue = Math.floor(progress * (end - start) + start);

  //     this.renderer.setProperty(element, 'innerHTML', animatedValue.toString());

  //     if (progress < 1) {
  //       window.requestAnimationFrame(step);
  //     }
  //   };

  //   window.requestAnimationFrame(step); 
  // }


  @Input() startValue: number = 0;
  @Input() endValue: number = this.service.total_cost;
  currentNumber: number = this.service.total_cost;

  ngOnInit() {
    // this.animateNumber();
  }

  animateNumber() {
    // You can use RxJS timer to increment the number smoothly.
    timer(0, 10)
      .pipe(
        map((x) => Math.floor(x * (this.endValue - this.startValue) / 100 + this.startValue)),
        take(100)
      )
      .subscribe((num) => {
        this.currentNumber = num;
      });
  }

}


