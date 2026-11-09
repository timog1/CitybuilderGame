import {Injectable, signal} from '@angular/core';
import grassImage from './assets/tiles/grass.png';
import houseImage from './assets/tiles/house.png';
import mazeMon from './assets/mons/maze.png';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly buildingImages: Map<string, string> = new Map([
    ['grass', grassImage],
    ['house', houseImage]
  ]);
  allMons = new Map<string, string>([
    ["maze", mazeMon]]
  )

}
