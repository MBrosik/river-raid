import { mainInstance } from "../../../Main";
import colorRaycaster from "../../../utils/TwoJS/raycaster/colorRaycaster";
import mapInfo from "../../constants/mapInfo";
import { allImages } from "../../loadAllImages";
import Enemy from "../Enemy";

export default class Ballon extends Enemy {   
   movable:boolean
   reverse: boolean;
   colider: colorRaycaster;

   constructor(x: number, y: number, moveable:boolean, reverse:boolean) {
      const { ballon } = allImages.enemies;   
      let ratio = ballon.width / ballon.height;

      super(ballon, { dx: x, dy: y, dw: 40, dh: 40 / ratio })      

      this.movable = moveable;
      this.reverse = reverse;
      this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);
   }
   
   
   move():void {
      let { x, y, width, height } = this.map_info

      x += this.reverse ? -2 : 2;
      
      if(this.colider.getCollision()){
         this.reverse = !this.reverse
      }

      this.map_info.x += this.reverse ? -2 : 2;
    }
}