import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-record',
  templateUrl: './session-record.component.html',
  styleUrls: ['./session-record.component.scss']
})
export class SessionRecordComponent implements OnInit {
  practiceTime: number;

  constructor() { }

  ngOnInit(): void {
    this.practiceTime = 30;
  }

  onClick(): void {
    // nothing
  }
}
