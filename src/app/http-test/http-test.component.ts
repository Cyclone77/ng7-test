import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  constructor(
    private request: HttpTestService
  ) { }

  ngOnInit() {
    this.request.getDataJson();
  }

}
