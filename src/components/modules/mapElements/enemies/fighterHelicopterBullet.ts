import { mainInstance } from "../../../Main";
import normalizeFrameRate from "../../../utils/normalizeFrameRate";
import Camera from "../../../utils/TwoJS/Camera";
import { Mesh } from "../../../utils/TwoJS/interfaces.";
import colorRaycaster from "../../../utils/TwoJS/raycaster/colorRaycaster";
import SquareSquareReycaster from "../../../utils/TwoJS/raycaster/squareSquareReycaster";
import { renderer_functions } from "../../../utils/TwoJS/Renderer";
import LoadAllAudio from "../../LoadAllAudio";

export default class fighterHelicopterBullet implements Mesh {
   map_info: { width: number; height: number; x: number; y: number; z: number; };
   colider: colorRaycaster;
   reversed: boolean;

   constructor(x: number, y: number, reversed: boolean, colider: colorRaycaster) {
      this.map_info = {
         width: 10,
         height: 5,
         x: reversed ? x - 10 : x,
         y: y,
         z: 3,
      }

      this.reversed = reversed
      this.move = this.move.bind(this);
      renderer_functions.push(this.move)

      // this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);
      this.colider = colider;

      let audio = <HTMLAudioElement>LoadAllAudio.audios.helicopterStrike.cloneNode(true);
      audio.play()
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera) {
      const { width, height, x, y } = this.map_info

      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.rect(x - camera.x, y - camera.y, width, height);
      ctx.fill();
   }

   move() {

      this.map_info.x += (this.reversed ? -20 : 20) * normalizeFrameRate();

      if (this.map_info.y - mainInstance.camera.y < 0) {
         mainInstance.scene.remove(this);
         renderer_functions.removeIf(el => el == this.move)
      }
      else {
         this.checkCollision();
      }
   }

   checkCollision() {


      if (SquareSquareReycaster(mainInstance.player.map_info, this.map_info)) {
         mainInstance.player.checkLives();
         mainInstance.scene.remove(this);
         renderer_functions.removeIf(el => el == this.move)
         return
      }

      this.colider.aPaint = mainInstance.blocks;
      this.colider.bPaint = [this]

      if (this.colider.getCollision()) {
         mainInstance.scene.remove(this);
         renderer_functions.removeIf(el => el == this.move)
      }
   }
}