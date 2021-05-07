import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import {Session} from '../../../models/session';
import {SessionDataService} from '../../services/session-data-service';


@Component({
  selector: 'app-session-record',
  templateUrl: './session-log.component.html',
  styleUrls: ['./session-log.component.scss']
})
export class SessionLogComponent implements OnInit, OnDestroy {
  actualSession: Session;
  sessionSubscription: Subscription;
  timerBar: Observable<number>;
  sessionLength: number;

  constructor(private sessionData: SessionDataService) { }

  ngOnInit(): void {
    this.sessionLength = this.actualSession.practiceTime;
    this.sessionSubscription = this.sessionData.currentSession.subscribe(
      actualSession => this.actualSession = actualSession
    );
  }

  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }
}
