
 export default function img_loader(link: string):Promise<HTMLImageElement> {
   return new Promise(resolve => {
      let img = document.createElement("img");
      img.src = link;

      img.onload = () => {
         resolve(img);
      };
   });
}