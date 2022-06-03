import Camera from "./Camera";

export interface mapDataInt {
   /** x position in map*/
   dx?: number,
   /** y position in map*/
   dy?: number,
   /** z position in map*/
   dz?: number,
   /** width of square*/
   dw?: number,
   /** height of square*/
   dh?: number,
}

export interface imageData {
   /** x position in image*/
   sx?: number,
   /** y position in image*/
   sy?: number,
   /** width of image*/
   sw?: number,
   /** height of image*/
   sh?: number,
}

export interface Mesh{   
   map_info : {
      width?: number,
      height?: number,
      x: number,
      y: number,
      z: number,
   }
   action(ctx: CanvasRenderingContext2D, camera:Camera):void
}
