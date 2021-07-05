import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {Session} from '../../../models/session';
import * as dayjs from 'dayjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-session-log',
  templateUrl: './session-before.component.html',
  styleUrls: ['./session-before.component.scss']
})

export class SessionBeforeComponent implements OnInit, OnDestroy {
  sessionForm: FormGroup;
  sessionSubscription: Subscription;
  sessionPlan: Session = {
    date: '',
    practiceTime: 0,
    whatToPractice: '',
    sessionIntent: ''
  };

  constructor(
    private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit(): void {
    this.sessionPlan.date = dayjs(new Date()).format('YYYY-MM-DD h:m a');
    this.sessionPlan.practiceTime = this.sessionForm.value.practiceTime;
    this.sessionPlan.whatToPractice = this.sessionForm.value.whatToPractice;
    this.sessionPlan.sessionIntent = this.sessionForm.value.sessionIntent;
    this.router.navigate(['/sessionDuring']);
  }

  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }

  private initializeForm(): void {
    this.sessionForm = this.fb.group({
      practiceTime: 0,
      whatToPractice: '',
      sessionIntent: ''
    });
  }
}
