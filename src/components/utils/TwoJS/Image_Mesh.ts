import Camera from "./Camera.js";
import { imageData, mapDataInt, Mesh } from "./interfaces..js";
import Vector2 from "./Vector2";



export default class Image_Mesh implements Mesh {
   image_info: {
      source: HTMLImageElement;
      width: number; height: number; x: number; y: number;
   };
   map_info: { width: number; height: number; x: number; y: number; z: number; };
   imageRenderBool: boolean;


   constructor(
      image: HTMLImageElement,
      { dx = 0, dy = 0, dz = 0, dw = 10, dh = 10 }: mapDataInt,
      { sx = 0, sy = 0, sw = image.width, sh = image.height }: imageData
   ) {
      this.image_info = {
         source: image,
         width: sw,
         height: sh,
         x: sx,
         y: sy,
      };

      this.map_info = {
         width: dw,
         height: dh,
         x: dx,
         y: dy,
         z: dz,
      };

      this.imageRenderBool = sw == image.width && sh == image.height;
      
   }
   get pos_vect() {
      return new Vector2(this.map_info.x, this.map_info.y);
   }
   set pos_vect(val:Vector2){
      this.map_info.x = val.x, 
      this.map_info.y = val.y
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera) {
      let { width, height, x, y } = this.map_info;
      let { source, width: s_width, height: s_height, x: s_x, y: s_y } = this.image_info;


      ctx.beginPath();
      if (!this.imageRenderBool) {

         ctx.drawImage(source,
            s_x, s_y, s_width, s_height,
            x - camera.x, y - camera.y, width, height
         );
      }
      else {
         ctx.drawImage(source, x - camera.x, y - camera.y, width, height)
      }
      ctx.closePath();    
   }
}



