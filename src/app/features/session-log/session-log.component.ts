import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-session-log',
  templateUrl: './session-log.component.html',
  styleUrls: ['./session-log.component.scss']
})
export class SessionLogComponent implements OnInit {
  practiceTime: FormGroup;
  whatToPractice: FormGroup;
  sessionGoal: FormGroup;

  constructor(private sessionLogForm: FormBuilder) { }

  ngOnInit() {
    this.practiceTime = this.sessionLogForm.group({
      firstCtrl: ['', Validators.required],
    });

    this.whatToPractice = this.sessionLogForm.group({
      secondCtrl: ['', Validators.required],
    });

    this.sessionGoal = this.sessionLogForm.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.practiceTime.markAsDirty();
  }
  onSecondSubmit() {
    this.whatToPractice.markAsDirty();
  }
  onThirdSubmit() {
    this.sessionGoal.markAsDirty();
  }

}
