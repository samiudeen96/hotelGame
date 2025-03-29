import { Component, ElementRef, Injectable, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {

  audioSource = "assets/audio/coin.mp3"

  constructor(private renderer: Renderer2, public service: MainService) { }

  ngOnInit(): void { }


  @ViewChild('explosionContainer', { static: false }) explosionContainer: ElementRef | undefined;

  method2() {
    alert('called comp2 method from comp1');
  }

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

}
