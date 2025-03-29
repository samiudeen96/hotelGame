import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() tableData1:any;

  @Input() tableData2:any;

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

  gotoSubscribe(){
    this.service.show_subscribePage = 'subscribe';
  }

}
