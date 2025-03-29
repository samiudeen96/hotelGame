import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Validators, FormBuilder } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'FadeZoom',
      [
        transition(
          ':enter', [
          style({ transform: 'translateX(-50%) translateY(-50%) scale(.7)', opacity: 0 }),
          animate('0.6s', style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' })),
        ]
        ),
        transition(
          ':leave', [
          style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' }),
          animate('.6s', style({ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(.7)' })),
        ]
        ),
      ]),

    trigger('FadeUp',
      [
        transition(
          ':enter', [
          style({ transform: 'translateY(-45%) translateX(-50%)', opacity: 0 }),
          animate('0.6s', style({ opacity: 1, transform: 'translateY(-50%) translateX(-50%)' })),
        ]
        ),
        transition(
          ':leave', [
          style({ opacity: 1, transform: 'translateY(-45%) translateX(-50%)' }),
          animate('.6s', style({ opacity: 0, transform: 'translateY(-55%) translateX(-50%)' })),
        ]
        ),
      ]),

    trigger(
      'SlowFadeZoom',
      [
        transition(
          ':enter', [
          style({ transform: 'translateX(-50%) translateY(-50%) scale(.7)', opacity: 0 }),
          animate('0.3s', style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' })),
        ]
        ),
        transition(
          ':leave', [
          style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' }),
          animate('0.3s', style({ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(1)' })),
        ]
        ),
      ]),

    trigger('zoomIn', [
      state('void', style({ transform: 'scale(0)' })),
      transition('void => *', animate('300ms ease-in-out')),
    ]),

    trigger('slideRight', [
      state('start', style({ transform: 'translateX(110%)' })),
      state('end', style({ transform: 'translateX(0)' })),
      transition('start => end', animate('0.5s ease-in-out')),
      transition('end => start', animate('0.5s ease-in-out')),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  isChecked: boolean = false;
  chart: any;
  selectedPage = 'welcome';
  // selectedPage = 'reception';
  
  form: any;
  emailRegx: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  // animationState = 'in';
  audioSource = "assets/audio/coin.mp3"



  constructor(private fb: FormBuilder, public service: MainService, private cdref: ChangeDetectorRef) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      subject: ['Hotel Game', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      org: ['', Validators.required],
      req: ['From Game portal', Validators.required],
    });
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.cdref.detectChanges();
  }

  character = [
    {
      user: "",
      img: "assets/images/female.svg",
      img1: "assets/images/fullimg_female.svg",
      img2: "assets/images/halfimg_female.svg"
    },
    {
      user: "",
      img: "assets/images/male.svg",
      img1: "assets/images/fullimg_male.svg",
      img2: "assets/images/halfimg_male.svg"
    }
  ]


  selected = -1;
  seletedData: any = {
    img2: 'assets/images/halfimg_male.svg'
  };
  errormsg: any = ''

  capitalizeFirstLetter(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  selectCharacter(n: any, data: any) {
    if (this.character[n].user = this.service.name) {
      const capitalizedString = this.capitalizeFirstLetter(this.service.name);
      this.character[n].user = capitalizedString
      console.log(capitalizedString); //👉 "Name"
      this.selected = n;
      this.seletedData = data;
      this.btn = true;
      console.log(data);

      let input = {
        title: 'Hotel Game - ' + capitalizedString,
        page: location.href
      }
    } else {
      this.errormsg = "Please, add your name first and then choose your character."
      setTimeout(() => {
        this.errormsg = false;
      }, 3200)
    }
  }


  show_chart = '';
  btn = false;

  gotoinstruction() {
    if (this.service.name == '' || this.selected == -1) {

      this.selectedPage != 'instruction';
    } else {

      this.selectedPage = 'instruction';

    }
  }

  gotoReception() {
    this.selectedPage = 'reception';
    setTimeout(() => {
      this.service.selectedCaller = 0;
      this.service.question = this.service.getQuestion(this.service.selectedCaller);
      this.service.animState = 'end';
    }, 3000)
  }

  gototables() {
    this.service.show_tables = 'tables';
  }

  get Fullname() {
    return this.form.get('fullname')
  }

  get Orgname() {
    return this.form.get('orgname')
  }

  get Number() {
    return this.form.get('telNumber')
  }

  get Email() {
    return this.form.get('email')
  }
  validationMessages = {
    name: {
      required: 'Name is required.',
    },
    subject: {
      required: 'Subject is required.',
    },
    org: {
      required: 'Organization Name is required.',
    },
    mobile: {
      required: 'Mobile number is required.',
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email format.',
    },
    req: {
      required: 'Your Requirement is required.',
    },
  };
  loading = false;
  errMsg = '';
  sucMsg = '';
  submit = false;
  formSubmitted = false;
  onSubmit() {

    if (this.loading == false) {
      this.submit = true;
      console.log(this.form.value)
      if (this.form.valid) {
        this.loading = true;
        this.formSubmitted = true;
              this.sucMsg = 'Thanks for submiting your requirement. The team will contact you.';
      } else {
        this.errMsg = 'Please fill in all required fields.';
      }
    }
  }

}

