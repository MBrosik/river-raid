import Camera from "../Camera";
import Image_Mesh from "../Image_Mesh";
import { Mesh } from "../interfaces.";


export default class colorRaycaster {
   html_dom: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   empty_canvas: string;

   scale = 1
   // bPaint: Mesh[];
   constructor(
      public aPaint: (Mesh[] | Mesh)[],
      public bPaint: (Mesh[] | Mesh)[],
      private camera: Camera,
      width: number,
      height: number,
   ) {


      this.html_dom = document.createElement("canvas");
      this.html_dom.width = width;
      this.html_dom.height = height;

      this.ctx = this.html_dom.getContext("2d")!;


      const el = <Mesh>this.bPaint[0];

      const { width:width1, height:height1, x, y } = el.map_info;

      this.html_dom.width = width1! * this.scale
      this.html_dom.height = height1! * this.scale
      // this.ctx.save();

      // console.log(this.ctx.globalCompositeOperation);

      // this.ctx.globalCompositeOperation = "source-over";
      this.empty_canvas = this.html_dom.toDataURL();
   }
 

   getCollision(specificColor: number | null = null) {      

      console.time();
      this.ctx.clearRect(0, 0, this.html_dom.width, this.html_dom.height);

      const el = <Mesh>this.bPaint[0];
      let { width, height, x, y } = el.map_info


      this.camera = new Camera(x * this.scale, y * this.scale)
      this.html_dom.width = width! * this.scale
      this.html_dom.height = height! * this.scale


      for (const el of this.aPaint.flat()) {
         el.map_info.x *= this.scale
         el.map_info.y *= this.scale
         el.map_info.width! *= this.scale
         el.map_info.height! *= this.scale

         el.action(this.ctx, this.camera)

         el.map_info.x /= this.scale
         el.map_info.y /= this.scale
         el.map_info.width! /= this.scale
         el.map_info.height! /= this.scale
      }



      const imgData = this.ctx.getImageData(0, 0, width!* this.scale, height!* this.scale);
      // console.log(imgData.data.length);

      el.map_info.x *= this.scale
      el.map_info.y *= this.scale
      el.map_info.width! *= this.scale
      el.map_info.height! *= this.scale

      el.action(this.ctx, this.camera)

      el.map_info.x /= this.scale
      el.map_info.y /= this.scale
      el.map_info.width! /= this.scale
      el.map_info.height! /= this.scale

      const imgDataAfter = this.ctx.getImageData(0, 0, width!* this.scale, height!* this.scale);
      // console.log( imgData.data.length);


      for (let i = 0; i < imgData.data.length; i += 4) {
         let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
         let count1 = imgDataAfter.data[i] + imgDataAfter.data[i + 1] + imgDataAfter.data[i + 2];


         // && count != 255 * 3
         if (count != 0 && count != count1) {
            console.timeEnd();
            return true;
         }

      }
      console.timeEnd();

      return false
   } 
}

function colorRaycaster1(
   aPaint: Mesh[],
   bPaint: Mesh[],
   camera: Camera,
   width: number,
   height: number,
): boolean {
   let html_dom = document.createElement("canvas");

   html_dom.width = width;
   html_dom.height = height;

   let ctx = html_dom.getContext("2d")!;

   for (const el of aPaint) {
      el.action(ctx, camera)
   }

   niceFor: for (const el of bPaint) {

      let { width, height, x, y } = el.map_info

      const imgData = ctx.getImageData(x - camera.x, y - camera.y, width!, height!);
      el.action(ctx, camera)
      const imgDataAfter = ctx.getImageData(x - camera.x, y - camera.y, width!, height!);


      for (let i = 0; i < imgData.data.length; i += 4) {
         let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
         let count1 = imgDataAfter.data[i] + imgDataAfter.data[i + 1] + imgDataAfter.data[i + 2];

         if (count != 0 && count != count1) {
            return true;
         }

      }

   }

   return false
}