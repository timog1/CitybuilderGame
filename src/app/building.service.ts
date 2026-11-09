
import { Injectable, signal } from '@angular/core';
import { Building, BuildingClass } from './battle/Buildings/Building.interface';
import {BUILDING_REGISTRY, BuildingType} from './battle/Buildings/Buildings-registry';


@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  selectedBuilding = signal<BuildingType | null>(null);

  placedBuildings = signal<Building[]>([]);

  selectBuilding(type: BuildingType) {
    this.selectedBuilding.set(type);
  }

  placeBuilding(x: number, y: number) {
    const type: BuildingType | null = this.selectedBuilding();

    if (!type) return;

    // Check if tile is already occupied
    const occupied = this.placedBuildings().some(
      b => b.x === x && b.y === y
    );

    if (occupied) return;

    // Get class from registry
    const BuildingClass = BUILDING_REGISTRY.get(type);

    if (!BuildingClass) {
      console.error(`Unknown building type: ${type}`);
      return;
    }

    // Create actual instance
    const building = new BuildingClass(x, y);



    // Store instance
    this.placedBuildings.update(buildings => [
      ...buildings,
      building
    ]);

    building.onPlace();

    this.selectedBuilding.set(null);
  }
}
