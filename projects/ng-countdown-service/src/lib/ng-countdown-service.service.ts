import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NgCountdownService {
  private countdownSubjects: BehaviorSubject<string>[] = [];

  constructor() {}

  startCountdown(
    endTime: Date,
    units: ('s' | 'm' | 'h' | 'd')[] = ['h', 'm', 's']
  ): Observable<string> {
    if (endTime <= new Date()) {
      // If endTime is less than or equal to currentDate, return an observable with
      return new Observable<string>((observer) => {
        observer.next('Time up!');
        observer.complete();
      });
    }

    const countdownSubject = new BehaviorSubject<string>(
      this.countDown(endTime, units)
    );
    this.countdownSubjects.push(countdownSubject);

    timer(0, 1000)
      .pipe(
        map(() => this.countDown(endTime, units)),
        takeWhile((countdown) => countdown !== 'Time Up!')
      )
      .subscribe((countdown) => countdownSubject.next(countdown));

    return countdownSubject.asObservable();
  }

  private countDown(endTime: Date, units: ('s' | 'm' | 'h' | 'd')[]): string {
    const value = Math.abs(
      Math.round((endTime.getTime() - new Date().getTime()) / 1000)
    );
    const timeValues: { [key: string]: number } = {
      s: value % 60,
      m: Math.floor(value / 60) % 60,
      h: Math.floor(value / 3600) % 24,
      d: Math.floor(value / (3600 * 24)),
    };

    const formattedTime = units
      .map((unit) => timeValues[unit].toString().padStart(2, '0'))
      .join(':');
    return formattedTime;
  }
}
