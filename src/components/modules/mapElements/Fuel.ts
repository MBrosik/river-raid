import { mainInstance } from "../../Main";
import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import { allImages } from "../loadAllImages";
import destroyAnimation from "./destroyAnimation";

export default class Fuel extends Image_Mesh {
   constructor(x: number, y: number) {
      let width = 40;
      let height = width / (allImages.fuel.width / allImages.fuel.height)

      super(
         allImages.fuel,
         { dx: x, dy: y, dw: width, dh: height },
         {}
      )
   }
   @destroyAnimation()
   destroy() {
      mainInstance.fuels.removeIf(el => el == this)      
   }
}