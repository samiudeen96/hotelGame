import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Chart from 'chart.js/auto';
// import { ApiService } from './api.service';
import { CoinComponent } from '../components/coin/coin.component';
// import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  name: string = '';
  show_chart = '';
  show_tables = '';
  show_subscribePage = '';
  start_date = new Date()
  glow = false

  animState = 'start';
  
  selectedCaller: any;
  question = '';
  btn: any;


  // private subject = new Subject<any>();
  // sendEvent() {
  //   this.subject.next("");
  // }
  // getEvent(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  // capitalizeFirstLetter(str: string): string {
  //   return str.slice(0, 1).toUpperCase() + str.slice(1);
  // }

  constructor(private router: Router) {
    const currentDate = new Date();

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDayOfWeek = currentDate.getDay();

    // Calculate the number of days to add to reach the next Monday
    const daysToAdd = currentDayOfWeek === 1 ? 7 : 8 - currentDayOfWeek;

    // Calculate the date for the next Monday
    const nextMonday = new Date(currentDate);
    nextMonday.setDate(currentDate.getDate() + daysToAdd);

    // Set your start_date to the next Monday
    this.start_date = nextMonday;

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const startDate = new Date(this.start_date);
    for (let i = 0; i < 7; i++) {
      let date = new Date(nextMonday);
      date.setDate(nextMonday.getDate() + i);
      const dayOfMonth = date.getDate();
      const dayOfWeek = dayNames[date.getDay()];
      const strMonth = MonthNames[date.getMonth()];

      this.booking.push({
        date: `${strMonth} ${dayOfMonth},<br>${dayOfWeek}`
      })
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        
      }
    });
    // this.getZone();
  }

  total_cost = 0;
  room_cost = 450;
  selectedQues = 0;

  caller = [
    {
      name: "Emily",
      start_date: 3,
      booking: 4,
      img: "assets/images/Emily.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring1.mp3"
    },
    {
      name: "Jacob",
      start_date: 4,
      booking: 2,
      img: "assets/images/Jacob.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring2.mp3"
    },
    {
      name: "Sophia",
      start_date: 6,
      booking: 1,
      img: "assets/images/Sophia.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring3.mp3"
    },
    {
      name: "Ethan",
      start_date: 4,
      booking: 3,
      img: "assets/images/Ethan.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring1.mp3"
    },
    {
      name: "Olivia",
      start_date: 5,
      booking: 1,
      img: "assets/images/Olivia.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring2.mp3"
    },
    {
      name: "Liam",
      start_date: 6,
      booking: 1,
      img: "assets/images/Liam.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring3.mp3"
    },
    {
      name: "Ava",
      start_date: 6,
      booking: 1,
      img: "assets/images/Ava.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring1.mp3"
    },
    {
      name: "Noah",
      start_date: 3,
      booking: 2,
      img: "assets/images/Noah.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring2.mp3"
    },
    {
      name: "Mia",
      start_date: 2,
      booking: 5,
      img: "assets/images/Mia.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring3.mp3"
    },
    {
      name: "Benjamin",
      start_date: 0,
      booking: 1,
      img: "assets/images/Benjamin.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring1.mp3"
    },
    {
      name: "Annalee",
      start_date: 2,
      booking: 5,
      img: "assets/images/Mia.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring2.mp3"
    },
    {
      name: "Branden",
      start_date: 0,
      booking: 1,
      img: "assets/images/Benjamin.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring3.mp3"
    },
    {
      name: "Pierre",
      start_date: 2,
      booking: 5,
      img: "assets/images/Mia.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring1.mp3"
    },
    {
      name: "Nicole",
      start_date: 0,
      booking: 1,
      img: "assets/images/Benjamin.svg",
      accept: false,
      shouldAutoplay: true,
      animate: true,
      audioSource: "assets/audio/ring2.mp3"
    },
  ]

  booking: any = [];

  room: any = [
    {
      start_date: 0,
      no_of_days: 3,
    },
    {
      start_date: 0,
      no_of_days: 3,
    },
    {
      start_date: 0,
      no_of_days: 3,
    },
    {
      start_date: 0,
      no_of_days: 3,
    }, {
      start_date: 0,
      no_of_days: 3,
    }
  ];

  table: any = [
    [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
    ],
    [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
    ],
    [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
    ],
    [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
    ],
    [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
    ]
  ]


  getQuestion(n: any) {
    console.log('getQuestion = ', n);
    this.selectedQues = n;
    let no_room = this.caller[n].booking == 1 ? 'one-night'
      : this.caller[n].booking == 2 ? 'two-nights'
        : this.caller[n].booking == 3 ? 'three-night'
          : this.caller[n].booking == 4 ? 'four-night'
            : this.caller[n].booking == 5 ? 'five-night' : '';

    let date = this.getFormat(this.caller[n].start_date);
    'October 15, 2022';

    let ques_arr = [
      `Hello, I'm <b class="txt_lblack">${this.caller[n].name}</b>. 
      I'm interested in reserving <b class="txt_lblack">${no_room}</b> 
      stay starting on <b class="txt_lblack">${date}</b>. Are you able to accommodate this request?`,

      `Good day! I'd like to inquire about the availability of a room for <b class="txt_lblack">${no_room}</b> 
      stay beginning on <b class="txt_lblack">${date}</b>. Are you able to accommodate this request?`,

      `Hi there, I'm looking to book a room for <b class="txt_lblack">${no_room}</b> stay starting 
      on <b class="txt_lblack">${date}</b>. Are you able to accommodate this request?`
    ];


    return ques_arr[Math.floor(Math.random() * 3)]


  }

  getFormat(startDate: any) {
    // Assuming you have a Date object named 'newDate'
    const newDate = new Date(this.start_date);
    newDate.setDate(this.start_date.getDate() + startDate);

    // Define an array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];


    // Get the month, day, and year from the Date object
    const month = monthNames[newDate.getMonth()];
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    // Create the formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  }

  no_of_room_booked = 0;
  no_of_people_accepted = 0;
  chart1: any;
  chart2: any;

  showChart() {
    this.show_chart = 'charts';

    this.table.map((f: any) => {
      this.no_of_room_booked += f.filter((s: any) => s.filled == true).length
      console.log(this.no_of_room_booked)
    });

    this.no_of_people_accepted = this.caller.filter((f: any) => f.accept == true).length;

    setTimeout(() => {
      this.createChart1();
      this.createChart2();
    }, 250);
  }

  createChart1() {

    let value = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.table.length; i++) {
      const rooms = this.table[i];
      for (let j = 0; j < rooms.length; j++) {
        value[j] += this.table[i][j].filled == true ? this.room_cost : 0;
      }
    }

    this.chart1 = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '# of Votes',
            data: value,
            borderWidth: 1,

          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            // labels: {
            //     color: 'rgb(255, 99, 132)'
            // }
          }
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 2000
          }
        },
      },
    });
  }

  createChart2() {

    let value = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.table.length; i++) {
      const rooms = this.table[i];
      for (let j = 0; j < rooms.length; j++) {
        value[j] += this.table[i][j].filled == true ? 1 : 0;
      }
    }

    this.chart2 = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '# of Votes',
            data: value,
            borderWidth: 1,

          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            // labels: {
            //     color: 'rgb(255, 99, 132)'
            // }
          }
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 5
          }
        },
      },
    });
  }

  zoneName: any;

  clock = [
    {
      country: 'New York',
      zone: 'America/New_York',
      hourHandTransform: 'rotate(0deg)',
      minuteHandTransform: 'rotate(0deg)',
      secondHandTransform: 'rotate(0deg)',
    },
    {
      country: 'London',
      zone: 'Europe/London',
      hourHandTransform: 'rotate(0deg)',
      minuteHandTransform: 'rotate(0deg)',
      secondHandTransform: 'rotate(0deg)',
    },
    {
      country: 'Tokyo',
      zone: 'Asia/Tokyo',
      hourHandTransform: 'rotate(0deg)',
      minuteHandTransform: 'rotate(0deg)',
      secondHandTransform: 'rotate(0deg)',
    },
    {
      country: 'Moscow',
      zone: 'Europe/Moscow',
      hourHandTransform: 'rotate(0deg)',
      minuteHandTransform: 'rotate(0deg)',
      secondHandTransform: 'rotate(0deg)',
    }
  ]

  selectedCoin = 0

  flip: any;

  activeFlip(n: any) {
    this.selectedCoin = n + 1;
  }

  coin = [
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: true
    },
    {
      flip: false,
      flipCoin: false
    },
    {
      flip: false,
      flipCoin: false
    },
  ]
}


