import Camera from "../../utils/TwoJS/Camera";
import { Mesh } from "../../utils/TwoJS/interfaces.";
import mapInfo from "../constants/mapInfo";

export default class BlackFloor implements Mesh {
   map_info: {
      width?: number,
      height?: number,
      x: number,
      y: number,
      z: number,
   }

   constructor(y: number) {
      this.map_info = {
         x: 0,
         y: y,
         z: 0,
         width: mapInfo.width,
         height: mapInfo.height + 30,
      }
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera): void {
      const { x, y, width, height } = this.map_info

      ctx.fillStyle = "black";
      ctx.rect(x - camera.x, y - camera.y, width!, height!);
      ctx.fill();
   }
}