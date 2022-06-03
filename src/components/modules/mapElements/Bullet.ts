import { mainInstance } from "../../Main";
import Camera from "../../utils/TwoJS/Camera";
import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import { Mesh } from "../../utils/TwoJS/interfaces.";
import colorRaycaster from "../../utils/TwoJS/raycaster/colorRaycaster";
import squarePolygonReycaster from "../../utils/TwoJS/raycaster/squarePolygonReycaster";
import SquareSquareReycaster from "../../utils/TwoJS/raycaster/squareSquareReycaster";
import { renderer_functions, renderer_functions_after } from "../../utils/TwoJS/Renderer";
import mapInfo from "../constants/mapInfo";
import Ship from "./enemies/Ship";

export default class Bullet implements Mesh {
   map_info: { width: number; height: number; x: number; y: number; z: number; };
   colider: colorRaycaster;

   constructor(x: number, y: number) {
      this.map_info = {
         width: 5,
         height: 10,
         x: x,
         y: y,
         z: 3,
      }

      this.move = this.move.bind(this);
      renderer_functions.push(this.move)


      this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera) {
      const { width, height, x, y } = this.map_info

      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.rect(x - camera.x, y - camera.y, width, height);
      ctx.fill();
   }

   move() {      

      this.map_info.x = mainInstance.player.map_info.x + mainInstance.player.map_info.width/2 - this.map_info.width/2
      this.map_info.y -= 20;
      if (this.map_info.y - mainInstance.camera.y < 0) {
         mainInstance.scene.remove(this);
         renderer_functions.removeIf(el => el == this.move)
      }
      else {
         this.checkCollision();
      }           
   }

   checkCollision() {
      for (const enemy of [...mainInstance.enemies, ...mainInstance.fuels]) {
         
         if (SquareSquareReycaster(enemy.map_info, this.map_info)) {
            enemy.destroy();
            mainInstance.scene.remove(this);
            renderer_functions.removeIf(el => el == this.move)
            return
         }
      }

      if (this.colider.getCollision()) {
         mainInstance.scene.remove(this);
         renderer_functions.removeIf(el => el == this.move)         
      }      
   }
}