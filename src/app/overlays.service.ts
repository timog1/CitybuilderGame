import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlaysService {
  showFight = signal(false);
  currentRound = signal(0);

  openFight(){
    this.showFight.set(true);
  }

  closeFight() {
    this.showFight.set(false);
  }


}
