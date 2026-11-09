import {Component, inject} from '@angular/core';
import {BuildingService} from '../building.service';
import grassImage from '../assets/tiles/grass.png';
import houseImage from '../assets/tiles/house.png';
import {GameService} from '../game.service';

@Component({
  selector: 'app-nextRound',
  standalone: true,
  templateUrl: './nextRound.html',
  styleUrl: './nextRound.css'
})
export class nextRound {

  game = inject(GameService);
  nextRound(){
    console.log("nextRound")
    this.game.addMoney(10)
    this.game.nextRound()
    console.log(this.game.currentRound())
  }
}
