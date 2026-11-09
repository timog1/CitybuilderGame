import {Component, effect, inject} from '@angular/core';
import {GameService, Mon} from '../game.service';
import mazeMon from '../assets/mons/maze.png';
import {OverlaysService} from '../overlays.service';
import {mons} from './mons/mons';
@Component({
  selector: 'app-battle',
  standalone: true,
  templateUrl: './battle.html',
  imports: [
    mons
  ],
  styleUrl: './battle.css'
})
export class battle {
  attacks = [10, 20]
  readonly attackteam: Mon[] = [{name: 'maze', attack: 10, health: 200}]

  fight_won = 0

  overlayService = inject(OverlaysService);
  gameService = inject(GameService);
  playerMons: Mon[] = this.gameService.mons();
    onNextRoundFight(round: number){
    if(this.attacks.includes(round)){
      if(this.fight("test")){
        this.overlayService.closeFight()
      } else{

      }
    }
  }
  constructor() {
    effect(() => {

      this.onNextRoundFight(this.gameService.currentRound());
    });
  }
  fight(enemy: string){
    console.log("fight")
    this.overlayService.openFight()

    let attackMons: Mon[] = structuredClone(this.attackteam);

    while(true){

      attackMons[0].health -= this.playerMons[0].attack
      this.playerMons[0].health -= attackMons[0].attack
      if(this.playerMons[0].health <= 0){
        if(this.playerMons.length <= 1){
          return false;
        }
        this.playerMons.splice(0, 1);
      }
      if(attackMons[0].health <= 0){
        if(attackMons.length <= 1){
          return true;
        }
        attackMons.splice(0, 1);
      }
    }


  }
}
