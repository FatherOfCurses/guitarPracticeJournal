import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

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
    // capture the date, maybe time
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
