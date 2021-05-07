import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Session} from '../../models/session';

@Injectable()
export class SessionDataService {
  defaultSession: Session = {
    date: '',
    practiceTime: 0,
    whatToPractice: '',
    sessionIntent: ''
  };
  private sessionSource = new BehaviorSubject(this.defaultSession);
  currentSession = this.sessionSource.asObservable();

  constructor() {  }

  changeSession(session: Session) {
    this.sessionSource.next(session);
  }
}
