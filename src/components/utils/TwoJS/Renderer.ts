import Camera from "./Camera.js";
import Scene from "./Scene.js";

declare global {
   interface CanvasRenderingContext2D {
      webkitImageSmoothingEnabled: boolean,
      mozImageSmoothingEnabled: boolean,
   }
}


export let renderer_functions: (() => void)[] = [];
export let renderer_functions_after: (() => void)[] = [];

export const TIME = {
   last_time: Date.now(),
   /** in milliseconds */
   time_stamp: 0,
};

export class Renderer {
   html_dom: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   stopBool: boolean;
   backgroundColor: string;
   
   constructor(width: number, height: number, public scene: Scene, public camera: Camera) {
      
      this.html_dom = document.createElement("canvas");
      this.html_dom.width = width;
      this.html_dom.height = height;

      this.ctx = this.html_dom.getContext("2d")!;      
      
      this.ctx.webkitImageSmoothingEnabled = false;
      this.ctx.mozImageSmoothingEnabled = false;
      this.ctx.imageSmoothingEnabled = false;      

      this.backgroundColor = "blue";
      this.stopBool = false;      

      this.render();
   }

   async render(scene: Scene = this.scene) {           
      let { width, height } = this.html_dom;

      this.ctx.clearRect(0, 0, width, height);
      this.ctx.fillStyle = this.backgroundColor;
      this.ctx.fillRect(0, 0, width, height);

      for (const iterator of renderer_functions) {
         iterator();
      }    

      if (scene.mesh_array.length != 0) {
         scene.mesh_array.sort((el, el1) => {
            let { x, y, z } = el.map_info;
            let { x: x1, y: y1, z: z1 } = el1.map_info;

            if (
               z - z1 >= 1 ||
               (z - z1 == 0 && y - y1 >= 1) ||
               (z - z1 == 0 && y - y1 == 0 && x - x1 >= 1)
            ) {
               return 1;
            }

            return -1;
         });
      }

      scene.mesh_array.forEach(el => {         
         el.action(this.ctx, this.camera);
      });

      for (const iterator of renderer_functions_after) {
         iterator();
      }

      TIME.time_stamp = Date.now() - TIME.last_time;
      TIME.last_time = Date.now();      
                  
      if (!this.stopBool) {         
         requestAnimationFrame(() => {            
            this.render();
         });
      }
   }
}
