import { mainInstance } from "../../../Main";
import colorRaycaster from "../../../utils/TwoJS/raycaster/colorRaycaster";
import mapInfo from "../../constants/mapInfo";
import { allImages } from "../../loadAllImages";
import Enemy from "../Enemy";

export default class WTC extends Enemy {
   movable: boolean
   reverse: boolean;   

   constructor(x: number, y: number, moveable: boolean, reverse: boolean) {
      const { wtc } = allImages.enemies;
      let ratio = wtc.width / wtc.height;

      super(wtc, { dx: x, dy: y, dw: 40, dh: 40 / ratio })

      this.movable = moveable;
      this.reverse = reverse;      
   }


   move(): void {
   }
}