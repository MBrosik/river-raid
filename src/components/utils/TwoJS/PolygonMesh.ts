import Camera from "./Camera";
import { Mesh } from "./interfaces.";

export default class PolygonMesh implements Mesh {
   map_info: { x: number; y: number; z: number; };
   // map_info: {};
   constructor(
      public points: { x: number, y: number }[],
      public color: string,
      z: number = 0
   ) {
      this.map_info = {
         x: points[0].x,
         y: points[0].y,
         z: z
      }
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera) {
      let { x, y } = this.points[0]

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(x - camera.x, y - camera.y);

      for (let index = 1; index < this.points.length; index++) {
         const point = this.points[index];

         ctx.lineTo(point.x - camera.x, point.y - camera.y);
      }

      ctx.closePath()
      ctx.fill()
   }
}