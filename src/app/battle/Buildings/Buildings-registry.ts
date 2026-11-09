import {Building, BuildingClass, BuildingDefinition} from './Building.interface';
import { House } from './House';


export type BuildingType = 'house';

export const BUILDING_REGISTRY = new Map<BuildingType, BuildingClass>([
  ['house', House],
]);
