import { mainInstance } from "../../Main";
import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import colorRaycaster from "../../utils/TwoJS/raycaster/colorRaycaster";
import useSleep from "../../utils/useSleep";
import { tank1 } from "../constants/Levels/levelInt";
import mapInfo from "../constants/mapInfo";
import { allImages } from "../loadAllImages";
import destroyAnimation from "./destroyAnimation";
import Tank from "./enemies/tank/Tank";

export default class Bridge extends Image_Mesh {
   tank: Tank;
   colorRaycaster: colorRaycaster;

   constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      tankInfo: tank1
   ) {
      const { bridge } = allImages

      super(bridge, { dx: x, dy: y, dw: width, dh: height }, {})

      let startPos = { x: tankInfo.startPos, y: y + height / 2 - 25 }
      let endPos = { x: tankInfo.endPos, y: y + height / 2 - 25 }

      this.tank = new Tank(
         "onBridge",
         tankInfo.reversed,
         startPos,
         endPos
      );      

      this.tank.speed = 300;
      mainInstance.scene.add(this.tank)

      this.colorRaycaster = new colorRaycaster([this], [this.tank], mainInstance.camera, mapInfo.width, mapInfo.height)

      // document.getElementById("aa")?.appendChild(this.colorRaycaster.html_dom);
   }

   @destroyAnimation()
   async destroy() {      

      if (this.colorRaycaster.getCollision()) {         

         this.tank.destroy();
      }
      else {
         this.tank.move = this.tank.moveAnimation;
      }
      
      mainInstance.enemies.removeIf(el => el == this)
      for (let x = 0; x < 4; x++) {
         mainInstance.renderer.backgroundColor = x % 2 == 0 ? "purple" : "blue";
         await useSleep(200);
      }
   }
}