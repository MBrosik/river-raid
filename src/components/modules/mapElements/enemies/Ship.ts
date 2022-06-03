import { mainInstance } from "../../../Main";
import Image_Mesh from "../../../utils/TwoJS/Image_Mesh";
import { mapDataInt } from "../../../utils/TwoJS/interfaces.";
import colorRaycaster from "../../../utils/TwoJS/raycaster/colorRaycaster";
import squarePolygonReycaster from "../../../utils/TwoJS/raycaster/squarePolygonReycaster";
import { renderer_functions } from "../../../utils/TwoJS/Renderer";
import mapInfo from "../../constants/mapInfo";
import { allImages } from "../../loadAllImages";
import Enemy from "../Enemy";


export default class Ship extends Enemy {
   movable: boolean;
   reverse: boolean;
   colider: colorRaycaster;

   constructor(reverse: boolean, movable: boolean, { x, y }: { x: number, y: number }) {      

      const { ship } = allImages.enemies;
      let startPos = reverse ? ship.reversed : ship.normal      
      let ratio = startPos.width / startPos.height;
      let width = 100

      super(startPos, { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });      
      

      // -----------------------------
      // push to this
      // -----------------------------
      this.movable = movable;
      this.reverse = reverse;
      this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);
   }

   move(): void {
      const { ship } = allImages.enemies;
      

      let { x, y, width, height } = this.map_info

      x += this.reverse ? -5 : 5;
            
      if (this.getCollision()) {
         this.reverse = !this.reverse

         this.image_info.source = this.reverse ? ship.reversed : ship.normal
      }

      this.map_info.x += this.reverse ? -5 : 5;
   }
   getCollision(){
      const { ship } = allImages.enemies;
      let col1 = this.colider.getCollision();
      this.image_info.source = this.image_info.source == ship.normal ? ship.reversed : ship.normal
      let col2 = this.colider.getCollision();
      this.image_info.source = this.image_info.source == ship.normal ? ship.reversed : ship.normal

      return col1 || col2
   }
}