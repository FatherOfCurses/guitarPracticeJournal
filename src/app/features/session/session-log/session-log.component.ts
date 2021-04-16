import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {Session} from '../../../models/session';

@Component({
  selector: 'app-session-log',
  templateUrl: './session-log.component.html',
  styleUrls: ['./session-log.component.scss']
})

export class SessionLogComponent implements OnInit {
  session: FormGroup;

  constructor(
    private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit(): void {
    console.log(this.session);
    this.router.navigate(['/sessionRecord']);
  }

  private initializeForm(): void {
    this.session = this.fb.group({
      practiceTime: 0,
      whatToPractice: '',
      sessionIntent: ''
    });
  }
}
