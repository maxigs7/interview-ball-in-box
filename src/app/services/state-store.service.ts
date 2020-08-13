import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { BallStates, Square } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class StateStoreService {
  // We set the initial state of the squares
  // The changes on square should be handled by methods
  private _squares$: BehaviorSubject<Square[]> = new BehaviorSubject<Square[]>([
    {
      state: BallStates.active,
    },
    {
      state: BallStates.inactive,
    },
    {
      state: BallStates.inactive,
    },
    {
      state: BallStates.inactive,
    },
  ]);

  // Expose the observable$ part of the squares subject (read only stream)
  get squares$(): Observable<Square[]> {
    return this._squares$.asObservable();
  }

  // the getter will return the last value emitted
  private get squares(): Square[] {
    return this._squares$.getValue();
  }

  // assigning a value to this.squares will push it onto the observable
  // and down to all of its subsribers (ex: this.squares = [])
  private set squares(val: Square[]) {
    this._squares$.next(val);
  }

  constructor() {}

  updateSquares(squareToActive: Square) {
    this.squares = [
      ...this.squares.map((square) => {
        if (square === squareToActive) {
          // NEW ACTIVE SQUARE
          square.state = BallStates.active;
        } else if (square.state === BallStates.active) {
          // PREVIOUS ACTIVE SQUARE HAS TO BE INTERMEDIATE STATE
          square.state = BallStates.intermediate;
        } else {
          square.state = BallStates.inactive;
        }
        return square;
      }),
    ];
  }
}

//mailto:palbizu@sparkdigital.com
