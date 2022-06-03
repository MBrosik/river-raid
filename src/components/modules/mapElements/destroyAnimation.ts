import { mainInstance } from "../../Main";
import { Mesh } from "../../utils/TwoJS/interfaces.";
import useSleep from "../../utils/useSleep";
import LoadAllAudio from "../LoadAllAudio";
import Player from "./Player";


interface alternativeMesh {
   image_info: {
      source: HTMLImageElement;
      width: number; height: number; x: number; y: number;
   };
}

export default function destroyAnimation(callable = function (this: any) {
   mainInstance.scene.remove(<Mesh><unknown>this);
}) {

   return function (target: any, name: string, descriptor: any) {      

      let func = descriptor.value;

      descriptor.value = async function (this: alternativeMesh, ...args: any[]) {

         if (!(this instanceof Player)) {
            let audio = <HTMLAudioElement>LoadAllAudio.audios.enemyCrush.cloneNode(true);
            audio.play()
         }
         
         func.bind(this)();

         let canvas = document.createElement("canvas");
         canvas.width = this.image_info.source.width;
         canvas.height = this.image_info.source.height;

         let ctx = canvas.getContext("2d")!;
         
         for (let x = 1; x < 5; x++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.image_info.source, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const imgData1 = ctx.getImageData(0, 0, canvas.width, canvas.height);            

            for (let y = 0; y < imgData.data.length; y += 4 * Math.ceil(x * Math.random())) {               

               imgData1.data[y] = imgData.data[y];
               imgData1.data[y + 1] = imgData.data[y + 1];
               imgData1.data[y + 2] = imgData.data[y + 2];
               imgData1.data[y + 3] = imgData.data[y + 3];
            }            
          
            ctx.putImageData(imgData1, 0, 0);

            let img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");

            this.image_info.source = img;

            await useSleep(100);
         }

         callable.bind(this)();
      }
   }
}