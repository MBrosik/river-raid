import { mainInstance } from "../../../Main";
import colorRaycaster from "../../../utils/TwoJS/raycaster/colorRaycaster";
import { renderer_functions } from "../../../utils/TwoJS/Renderer";
import { helType } from "../../constants/Levels/levelInt";
import mapInfo from "../../constants/mapInfo";
import { allImages } from "../../loadAllImages";
import Enemy from "../Enemy";
import fighterHelicopterBullet from "./fighterHelicopterBullet";
// Image_Mesh

export default class Helicopter extends Enemy {
   movable: boolean;
   reverse: boolean;
   dateNow: number;
   timeStamp: number;
   colider: colorRaycaster;
   helType: helType;
   deltaShot: number;
   lastShot: number;
   bulletColider!: colorRaycaster;

   constructor(reverse: boolean, movable: boolean, helType: helType, { x, y }: { x: number, y: number }) {

      const helicopter = allImages.enemies[helType == "non-shooting" ? "helicopter" : "fighterHelicopter"]
      let startPos = reverse ? helicopter.reversed : helicopter.normal

      let ratio = startPos[0].width / startPos[0].height;
      let width = 40

      super(startPos[0], { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });


      // -----------------------------
      // push to this
      // -----------------------------
      this.movable = movable;
      this.reverse = reverse;
      this.helType = helType;
      this.dateNow = Date.now();
      this.timeStamp = 100
      this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);

      if (this.helType == "shooting") {
         this.bulletColider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height)
      }

      // ---------------------
      // strike Enemy
      // ---------------------
      this.deltaShot = 200;
      this.lastShot = Date.now()


      this.fly = this.fly.bind(this)

      renderer_functions.push(this.fly)
   }
   fly() {
      const helicopter = allImages.enemies[this.helType == "non-shooting" ? "helicopter" : "fighterHelicopter"]

      let stateString: "reversed" | "normal" = this.reverse ? "reversed" : "normal"

      if (Date.now() - this.dateNow > this.timeStamp) {
         if (this.image_info.source == helicopter[stateString][0]) {
            this.image_info.source = helicopter[stateString][1]
         }
         else {
            this.image_info.source = helicopter[stateString][0]
         }
         this.dateNow = Date.now()
      }
   }

   move(): void {
      let { x, y, width, height } = this.map_info
      x += this.reverse ? -5 : 5;

      if (this.colider.getCollision()) {
         this.reverse = !this.reverse
      }

      this.map_info.x += this.reverse ? -5 : 5;
      if (this.helType == "shooting") this.strike();
   }
   strike() {
      if (Date.now() - this.lastShot > this.deltaShot) {
         const { x, y, width, height } = this.map_info
         let x1 = this.reverse ? this.map_info.x : x + width

         let bullet = new fighterHelicopterBullet(x1, y + height / 2, this.reverse, this.bulletColider)
         mainInstance.scene.add(bullet)

         this.lastShot = Date.now()
      }
   }
}