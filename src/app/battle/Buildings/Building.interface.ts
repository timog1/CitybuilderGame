export interface Building {
  onPlace(): void;
  onRoundEnd(): void;
  destroy(): void;
  x: number;
  y:number;
  readonly type: string;

}
export interface BuildingDefinition {
  readonly type: string;
  readonly sprite: string;
  readonly price: number;
  readonly name: string;
}
export interface BuildingClass {
  // Static properties
  readonly infos: BuildingDefinition;
  new (x:number, y:number): Building;

}
