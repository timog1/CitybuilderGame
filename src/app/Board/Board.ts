import { Component, inject } from '@angular/core';
import { BuildingService } from '../building.service';
import grassImage from '../assets/tiles/grass.png'
import houseImage from '../assets/tiles/house.png'
import {ConstantsService} from '../constants.service';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './Board.html',
  styleUrl: './Board.css'
})
export class Board {

  game = inject(BuildingService);
  tilesize_x = 32;
  tilesize_y = 32;
  constService = inject(ConstantsService)
  buildingImages = this.constService.buildingImages


  rows = Array.from({ length: 25 }, (_, i) => i);
  cols = Array.from({ length: 40 }, (_, i) => i);

  place(x: number, y: number) {
    this.game.placeBuilding(x, y);
  }

  getBuilding(x: number, y: number) {
    return this.game.placedBuildings().find(
      b => b.x === x && b.y === y
    );
  }

  getBuildingImage(type: string): string | undefined {

    return this.buildingImages.get(type);
  }
}
