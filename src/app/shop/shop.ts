import {Component, inject} from '@angular/core';
import grassImage from '../assets/tiles/grass.png';
import { BuildingService } from '../building.service';
import {GameService} from '../game.service';
import {BUILDING_REGISTRY, BuildingType} from '../battle/Buildings/Buildings-registry';
import {BuildingClass} from '../battle/Buildings/Building.interface';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  standalone: true,
  styleUrl: './shop.css'
})
export class Shop {

  grass = grassImage;

  build = inject(BuildingService);
  game = inject(GameService)
   money =  this.game.money;
  building: Map<BuildingType, BuildingClass> = BUILDING_REGISTRY;
  mons: Map<string, number> = new Map([
    ['maze', 10]
  ]);
  buy(price: number | undefined){
    if (price === undefined) return false;

    if (this.money() < price) {
      return false
    }
    this.game.substractMoney(price)
    return true
  }
  buyBuilding(build: BuildingType) {
    const BuildingClass = BUILDING_REGISTRY.get(build);

    if (!BuildingClass) {
      throw new Error(`Unknown building: ${build}`);
    }
    const price = BuildingClass.infos.price;
    if(this.buy(price)){
      this.build.selectBuilding(build)
    }


  }
  buyMons(name: string){
    const price = this.mons.get(name);
    if(this.buy(price)){
      this.game.addMon(name)
    }

  }
}
