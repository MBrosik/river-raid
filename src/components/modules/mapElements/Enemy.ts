import { mainInstance } from "../../Main";
import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import { mapDataInt } from "../../utils/TwoJS/interfaces.";
import { renderer_functions } from "../../utils/TwoJS/Renderer";
import destroyAnimation from "./destroyAnimation";
import EnemiesConfig from "../GameConfig";
import Helicopter from "./enemies/Helicopter";

export default abstract class Enemy extends Image_Mesh {
   abstract movable: boolean;
   distanceToPlayer:number = 500;

   constructor(image: HTMLImageElement, mapData: mapDataInt) {
      super(image, mapData, {})

      this.activate = this.activate.bind(this)
      this.move = this.move.bind(this)
      // this.after = this.after.bind(this)

      renderer_functions.push(this.activate)
   }

   fly(){}

   abstract move(): void

   private activate() {      

      if (
         Math.abs(mainInstance.player.map_info.y - this.map_info.y) < this.distanceToPlayer
         && this.movable
         && this.map_info.y - mainInstance.camera.y < mainInstance.renderer.html_dom.height - this.map_info.height
         && this.map_info.y - mainInstance.camera.y > 0 
         && EnemiesConfig.moveBool
      ) {
         this.move();         
      }

      if (!this.movable) renderer_functions.removeIf(el => el == this.activate)
   } 

   @destroyAnimation()
   destroy() {
      renderer_functions.removeIf(el => el == this.activate)

      renderer_functions.removeIf(el => el == this.fly)            

      mainInstance.scoreBoard.score += 200;      
      mainInstance.enemies.removeIf(el => el == this)
   }
}
