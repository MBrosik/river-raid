import normalizeFrameRate from "../../../utils/normalizeFrameRate";
import mapInfo from "../../constants/mapInfo";
import { allImages } from "../../loadAllImages";
import Enemy from "../Enemy";
// Image_Mesh

export default class FighterPlane extends Enemy {
   movable: boolean;
   reverse: boolean;

   constructor(reverse: boolean, { x, y }: { x: number, y: number }) {

      const { fighterPlane } = allImages.enemies;
      let startPos = reverse ? fighterPlane.reversed : fighterPlane.normal

      let ratio = startPos.width / startPos.height;
      let width = 50

      super(startPos, { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });

      // -----------------------------
      // push to this
      // -----------------------------
      this.movable = true;
      this.reverse = reverse;
   }

   move(): void {
      this.map_info.x += (this.reverse ? -10 : 10) * normalizeFrameRate();

      if (this.map_info.x > mapInfo.width) {
         this.map_info.x = 0;
      }
   }
}