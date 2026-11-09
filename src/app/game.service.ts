import { Injectable, signal } from '@angular/core';


export interface Mon{
  health: number;
  attack: number;
  name: string;

}
@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentRound = signal(0);
  nextRound(){
    this.currentRound.update(round => round + 1)
  }

  maxMons = 6;
  mons = signal<Mon[]>([])

  money = signal<number>(0)
   getMoney(){
    return this.money();
  }
  addMoney(add: number){
    this.money.update(money => money + add);
  }
  substractMoney(subtract: number){
    this.money.update(money => money - subtract);
  }
  makeMon(Mon:string){

    return {health: 100, attack: 20, name: Mon}
  }
  addMon(Mon: string){

    this.mons.update(mons => {
      mons.push(this.makeMon(Mon));
      return mons;
    });
  }
}
