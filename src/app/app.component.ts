import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateStoreService } from './services/state-store.service';
import { Square } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  squares$: Observable<Square[]> = this.stateStore.squares$;

  constructor(private stateStore: StateStoreService) {}

  changeState(item: Square) {
    this.stateStore.updateSquares(item);
  }
}
