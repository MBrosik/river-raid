import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import Polygon_Mesh from "../../utils/TwoJS/PolygonMesh";
import mapInfo from "../constants/mapInfo";
import { allImages } from "../loadAllImages";

export default class Block extends Image_Mesh {
   constructor(
      name: string,
      x: number,
      y: number,      
   ) {

      let image = allImages.levels[name]

      let height = mapInfo.width/(image.width/image.height)

      super(
         image,
         { 
            dx: x, 
            dy: y - height, 
            dz:0,
            dw: mapInfo.width, 
            dh: height
         },
         {}
      )
   }
}