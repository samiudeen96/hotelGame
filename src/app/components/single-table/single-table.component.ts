import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-single-table',
  templateUrl: './single-table.component.html',
  styleUrls: ['./single-table.component.scss']
})
export class SingleTableComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
