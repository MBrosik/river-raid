export default function imgReverse(image: HTMLImageElement,): HTMLImageElement {
   let canvas = document.createElement('canvas');
   canvas.width = image.width;
   canvas.height = image.height;

   let canvasContext = canvas.getContext('2d')!;


   canvasContext.translate(image.width, 0);
   canvasContext.scale(-1, 1);
   canvasContext.drawImage(image, 0, 0);

   let img = document.createElement('img');
   img.src = canvas.toDataURL("image/png");

   return img
   // return image
}