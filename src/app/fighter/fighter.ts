import {Component, inject} from '@angular/core';
import {GameService} from '../game.service';
import mazeMon from '../assets/mons/maze.png';
import {ConstantsService} from '../constants.service';
@Component({
  selector: 'app-mons',
  standalone: true,
  templateUrl: './fighter.html',
  styleUrl: './fighter.css'
})
export class fighter {
  constants = inject(ConstantsService)
  allMons = this.constants.allMons

  game = inject(GameService);
  amountOfMons = this.game.maxMons;
  mons = this.game.mons;

  protected readonly Array = Array;
}
