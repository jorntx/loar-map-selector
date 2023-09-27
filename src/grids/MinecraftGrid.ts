export class MinecraftGrid {
  bounding: [number, number][] ;
  loarLink: string = '';

  constructor(initializer?: any) {
    this.bounding = initializer.bounding;
    this.loarLink = initializer.loarLink;
    }
}