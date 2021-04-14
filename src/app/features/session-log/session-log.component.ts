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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.practiceTime = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.whatToPractice = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.sessionGoal = this.fb.group({
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
