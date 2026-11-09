import {Component, Inject, inject, input} from '@angular/core';
import houseImage from './assets/tiles/house.png';

import {ConstantsService} from '../../constants.service';
import {Building, BuildingClass, BuildingDefinition} from './Building.interface';
export class House implements Building {
  static readonly infos: BuildingDefinition = {
    type: 'house',
    name: 'House',
    sprite: 'assets/house.png',
    price: 100
  };



  x = 0;
  y = 0;

  onPlace(): void {
    // ...
  }

  onRoundEnd(): void {
    // ...
  }
  destroy(){

  }

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  readonly type: string = House.infos.type;
}
